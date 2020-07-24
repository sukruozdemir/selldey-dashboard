import React from "react";
import { Alert } from "reactstrap";

const FormSuccess = ({ text }) => (
  <Alert color='success' className='text-center'>
    <i className='fa fa-check-circle mr-3 alert-icon'></i>
    <span>
      <strong className='alert-heading mr-1'>Başarılı!</strong> {text}
    </span>
  </Alert>
);

export default FormSuccess;
