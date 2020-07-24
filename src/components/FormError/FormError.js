import React from "react";
import { Alert } from "reactstrap";

const FormError = ({ text }) => (
  <Alert color='danger' className='text-center'>
    <i className='fa fa-times-circle mr-1 alert-icon'></i>
    <span>
      <strong className='alert-heading mr-1'>Hata!</strong> {text}
    </span>
  </Alert>
);

export default FormError;
