import React, { useState, useContext, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Form, Formik, Field } from "formik";
import { useHistory } from "react-router-dom";
// import ReactSelect from "react-select";
import AsyncSelect from "react-select/async";

import * as Yup from "yup";

import ButtonDateInput from "../ButtonDateInput";
import {
  Button,
  CustomInput,
  Label,
  FormInput,
  FormGroup,
  FormSuccess,
  FormError,
  PageLoader,
} from "../../../components";

import { FetchContext } from "../../../context/FetchContext";

// SWR Hooks
import useCities from "../../../hooks/useCities";
import useCityProvinces from "../../../hooks/useCityProvinces";
import useProducts from "../../../hooks/useProducts";

// Date Picker Language
import tr from "date-fns/locale/tr";
registerLocale("tr", tr);

// Order Schema
const OrderSchema = Yup.object().shape({
  customerName: Yup.string().required(
    "Müşteri adı ve soyadı girilmesi zorunludur",
  ),
  phoneNumber: Yup.string()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{2})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,
      "Geçersiz telefon numarası girdiniz",
    )
    .required("Müşteri telefon numarası girilmesi zorunludur"),
  address: Yup.string().required("Adres girilmesi zorunludur"),
  quantity: Yup.number()
    .integer()
    .min(1, "Sipariş adeti 0'dan büyük ve 10'dan küçük olmalıdır")
    .max(9, "Sipariş adeti 0'dan büyük ve 10'dan küçük olmalıdır")
    .required("Adet girilmesi zorunludur"),
  orderNote: Yup.string(),
});

function NewOrderForm() {
  const history = useHistory();
  const fetchContext = useContext(FetchContext);

  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const [selectedCityId, setSelectedCityId] = useState();
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [products, setProducts] = useState([]);

  const searchProduct = async (inputValue, callback) => {
    if (!inputValue) return [];

    try {
      const response = await fetchContext.authAxios.get(
        `/products?title=%${inputValue}%`,
      );
      const products = response.data.results.map((product) => {
        return {
          label: product.title,
          value: product.id,
        };
      });
      setProducts(products);
      callback(products);
    } catch (ex) {
      callback([]);
    }
  };

  const { data: cityData } = useCities(fetchContext.authAxios, {
    limit: "90",
    sortBy: "title",
  });
  const { data: provinceData } = useCityProvinces(
    fetchContext.authAxios,
    selectedCityId,
    {
      limit: "50",
      sortBy: "title",
    },
  );

  useEffect(() => {
    if (cityData && cities.length === 0) setCities(cityData.results);
    if (selectedCityId && provinceData) setProvinces(provinceData.results);
  }, [cities, selectedCityId, cityData, provinceData]);

  return (
    <Formik
      initialValues={{
        customerName: "",
        phoneNumber: "",
        quantity: 1,
        address: "",
        paymentType: "KAPIDA_NAKIT_ODEME",
        orderNote: "",
        ordered: new Date(),
        city: "",
        province: "",
        product: "",
        status: "",
      }}
      onSubmit={(values) => {
        console.log({ values });
      }}
      validationSchema={OrderSchema}
      validateOnBlur={false}
      render={({ isBumitting }) => (
        <Form>
          {successMessage && <FormSuccess text={successMessage} />}
          {errorMessage && <FormError text={errorMessage} />}

          <FormGroup>
            <Label for='customerName'>Müşteri Adı ve Soyadı</Label>
            <FormInput
              type='text'
              name='customerName'
              id='customerName'
              placeholder='Müşteri adını girin...'
            />
          </FormGroup>

          <FormGroup>
            <Label for='phoneNumber'>Müşteri Telefon Numarası</Label>
            <FormInput
              name='phoneNumber'
              id='phoneNumber'
              mask={[
                /[1-9]/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
              ]}
              placeholder='Müşteri telefon no. girin...'
            />
          </FormGroup>

          <FormGroup>
            <Label for='address'>Müşteri Adresi</Label>
            <FormInput
              type='textarea'
              name='address'
              id='address'
              placeholder='Adres girin...'
            />
          </FormGroup>

          <FormGroup>
            <Label for='address'>Sipariş Notu</Label>
            <FormInput
              type='textarea'
              name='orderNote'
              id='orderNote'
              placeholder='Not girin...'
            />
          </FormGroup>

          <FormGroup>
            <Label for='quantity'>Sipariş Adeti</Label>
            <FormInput
              name='quantity'
              id='quantity'
              mask={[/[0-9]/]}
              placeholder='Adet girin...'
            />
          </FormGroup>

          <Field name='ordered'>
            {({ field, form: { setFieldValue } }) => (
              <FormGroup>
                <Label for='ordered' className='w-100'>
                  Sipariş Tarihi
                </Label>
                <DatePicker
                  {...field}
                  customInput={<ButtonDateInput />}
                  locale='tr'
                  onChange={(date) => setFieldValue(field.name, date)}
                  selected={field.value}
                  showTimeSelect
                  dateFormat='Pp'
                  timeInputLabel='Saat'
                  timeIntervals={1}
                />
              </FormGroup>
            )}
          </Field>

          <Field name='paymentType'>
            {({ field }) => (
              <FormGroup>
                <Label for='paymentType' className='pt-0'>
                  Ödeme Türü
                </Label>
                <div>
                  <CustomInput
                    {...field}
                    inline
                    type='radio'
                    id='paymentType1'
                    name='paymentType'
                    label='Kapıda Nakit'
                    value='KAPIDA_NAKIT_ODEME'
                    defaultChecked={field.value === "KAPIDA_NAKIT_ODEME"}
                  />
                  <CustomInput
                    {...field}
                    inline
                    type='radio'
                    id='paymentType2'
                    name='paymentType'
                    value='KAPIDA_KREDI_KARTI'
                    label='Kapıda Kredi Kartı İle'
                    defaultChecked={field.value === "KAPIDA_KREDI_KARTI"}
                  />
                </div>
              </FormGroup>
            )}
          </Field>

          <Field name='city'>
            {({ field, form: { setFieldValue } }) => (
              <FormGroup>
                <Label for='city'>İl</Label>
                <CustomInput
                  {...field}
                  type='select'
                  id='city'
                  onChange={(e) => {
                    setFieldValue(field.name, e.target.value);
                    setFieldValue("province", "");
                    setSelectedCityId(e.target.value);
                  }}
                >
                  <option key={0} value=''>
                    İl seçin...
                  </option>
                  {cities.map((city) => (
                    <option value={city.id} key={city.id}>
                      {city.title}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            )}
          </Field>

          <Field name='province'>
            {({ field }) => (
              <FormGroup>
                <Label for='province'>İlçe</Label>
                <CustomInput {...field} type='select' id='province'>
                  <option key={0} value=''>
                    İlçe seçin...
                  </option>
                  {provinces.map((province) => (
                    <option value={province.id} key={province.id}>
                      {province.title}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            )}
          </Field>

          <Field name='product'>
            {({ field, form: { setFieldValue } }) => (
              <FormGroup>
                <Label for='product'>Sipariş Edilen Ürün</Label>

                <AsyncSelect
                  {...field}
                  placeholder='Ürün ara...'
                  cacheOptions
                  defaultOptions
                  loadOptions={searchProduct}
                  value={
                    products
                      ? products.find((option) => option.value === field.value)
                      : ""
                  }
                  onChange={(option) => setFieldValue(field.name, option.value)}
                  onBlur={field.onBlur}
                />
              </FormGroup>
            )}
          </Field>

          <FormGroup className='float-right'>
            <Button
              color='link'
              onClick={history.goBack}
              disabled={isBumitting}
            >
              Geri Dön
            </Button>
            <Button type='submit' color='primary' disabled={isBumitting}>
              Kaydet
            </Button>
          </FormGroup>
        </Form>
      )}
    />
  );
}

export { NewOrderForm };
