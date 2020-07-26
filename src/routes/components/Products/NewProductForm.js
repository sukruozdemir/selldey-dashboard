import React, { useState } from "react";
import { Form, Formik, Field } from "formik";
import { useHistory } from "react-router-dom";
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
import { mutate } from "swr";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Ürün adı girilmesi zorunludur"),
  description: Yup.string(),
  site: Yup.string().url().required("Site girilmesi zorunludur"),
  active: Yup.boolean().default(true),
});

function NewProductForm({ onSubmit }) {
  const history = useHistory();
  const [active, setActive] = useState(true);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        site: "",
        active: true,
      }}
      onSubmit={async (values, { resetForm }) => {
        const result = await onSubmit(values, resetForm);
        if (result.status === true) {
          setSuccessMessage(`"${values.title}" başarıyla eklendi`);
          setErrorMessage(null);

          setTimeout(() => {
            mutate("/products");
            history.push("/dashboard/products/list");
          }, 1000);
        } else {
          setSuccessMessage(null);
          setErrorMessage(result.error.response.data.message);
        }
      }}
      validationSchema={ProductSchema}
      validateOnBlur={false}
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
                  defaultChecked={active}
                  onChange={() => {
                    setActive(!active);
                    form.setFieldValue(field.name, active);
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
            Kaydet
          </Button>
        </FormGroup>
      </Form>
    </Formik>
  );
}

export { NewProductForm };
