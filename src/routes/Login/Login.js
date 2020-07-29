import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  Button,
  EmptyLayout,
  FormError,
  FormGroup,
  FormInput,
  FormSuccess,
  Label,
  ThemeConsumer,
} from "../../components";

import { HeaderAuth } from "../components/HeaderAuth";
import { FooterAuth } from "../components/FooterAuth";
import { AuthContext } from "../../context/AuthContext";

import axios from "../../libs/axios";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email girilmesi zorunludur"),
  password: Yup.string().required("Şifre girilmesi zorunludur"),
});

const Login = () => {
  const authContext = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const submitCredentials = async (credentials) => {
    try {
      setLoginLoading(true);
      const { data } = await axios.post(`/auth/login`, credentials);

      authContext.setAuthState(data);
      setLoginSuccess("Giriş Başarılı");
      setLoginError(null);

      setTimeout(() => {
        setRedirectOnLogin(true);
      }, 700);
    } catch (error) {
      setLoginLoading(false);
      const { data } = error.response;
      setLoginError(data.message || "Giriş Yapılamadı");
      setLoginSuccess(null);
    }
  };

  return (
    <>
      {!redirectOnLogin && authContext.isAuthenticated() && (
        <Redirect to='/dashboard/products/list' />
      )}
      {redirectOnLogin && <Redirect to='/dashboard/products/list' />}
      <EmptyLayout>
        <EmptyLayout.Section center>
          {/* START Header */}
          <HeaderAuth title='Giriş Yapın' />
          {/* END Header */}

          {/* START Form */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => submitCredentials(values)}
            validationSchema={LoginSchema}
          >
            {() => (
              <Form className='mb-3'>
                {loginSuccess && <FormSuccess text={loginSuccess} />}
                {loginError && <FormError text={loginError} />}

                <FormGroup>
                  <Label for='email'>Email</Label>
                  <FormInput
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email Girin...'
                    className='bg-white'
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='password'>Şifre</Label>
                  <FormInput
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Şifre...'
                    className='bg-white'
                  />
                </FormGroup>
                <ThemeConsumer>
                  {({ color }) => (
                    <Button
                      disabled={loginLoading}
                      color={color}
                      block
                      type='submit'
                    >
                      Giriş Yap
                    </Button>
                  )}
                </ThemeConsumer>
              </Form>
            )}
          </Formik>
          {/* END Form */}

          {/* START Footer */}
          <FooterAuth />
          {/* END Footer */}
        </EmptyLayout.Section>
      </EmptyLayout>
    </>
  );
};

export default Login;
