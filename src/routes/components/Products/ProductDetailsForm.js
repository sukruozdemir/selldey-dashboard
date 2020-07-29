import React, { useState, useContext } from "react";
import { Form, Formik, Field } from "formik";
import { useHistory } from "react-router-dom";
import { mutate } from "swr";
import Toggle from "react-toggle";
import * as Yup from "yup";

import {
  Button,
  Label,
  FormInput,
  FormGroup,
  FormSuccess,
  FormError,
} from "../../../components";

import { FetchContext } from "../../../context/FetchContext";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Ürün adı girilmesi zorunludur"),
  description: Yup.string(),
  site: Yup.string().url().required("Site girilmesi zorunludur"),
  active: Yup.boolean().default(true),
});

function ProductDetailsForm({ id, title, description, site, active }) {
  const fetchContext = useContext(FetchContext);

  const history = useHistory();
  const [toggleActive, setToggleActive] = useState(active);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  return (
    <Formik
      initialValues={{
        title,
        description,
        site,
        active,
      }}
      validationSchema={ProductSchema}
      validateOnBlur={false}
      onSubmit={(values) => {
        fetchContext.authAxios
          .patch(`/products/${id}`, values)
          .then((response) => {
            setSuccessMessage(`"${values.title}" başarıyla güncellendi`);
            setErrorMessage(null);

            mutate(`/products/${id}`, { ...values });
            setTimeout(() => {
              history.goBack();
            }, 750);
          })
          .catch((error) => {
            setSuccessMessage(null);
            setErrorMessage(error.response.data.message);
          });
      }}
    >
      <Form>
        {successMessage && <FormSuccess text={successMessage} />}
        {errorMessage && <FormError text={errorMessage} />}

        <FormGroup>
          <Label for='title'>Ürün Adı</Label>
          <FormInput
            type='text'
            name='title'
            id='title'
            placeholder='Ürün Adı Girin...'
          />
        </FormGroup>

        <FormGroup>
          <Label for='title'>Ürün Açıklaması</Label>
          <FormInput
            type='text'
            name='description'
            id='description'
            placeholder='Açıklama Girin...'
          />
        </FormGroup>

        <FormGroup>
          <Label for='title'>Ürünün Sitesi</Label>
          <FormInput
            type='text'
            name='site'
            id='site'
            placeholder='https://www.google.com'
          />
        </FormGroup>

        <FormGroup className='d-flex'>
          <Field name='active'>
            {({
              field, // { name, value, onChange, onBlur }
              form,
            }) => (
              <>
                <Toggle
                  id='active'
                  name='active'
                  defaultChecked={toggleActive}
                  onChange={() => {
                    setToggleActive(!toggleActive);
                    form.setFieldValue(field.name, toggleActive);
                  }}
                  {...field}
                />
                <Label htmlFor='active' className='ml-2 mb-0 text-inverse'>
                  Aktif Mi?
                </Label>
              </>
            )}
          </Field>
        </FormGroup>

        <FormGroup className='float-right'>
          <Button color='link' onClick={history.goBack}>
            Geri Dön
          </Button>
          <Button type='submit' color='primary'>
            Güncelle
          </Button>
        </FormGroup>
      </Form>
    </Formik>
  );
}

export { ProductDetailsForm };
