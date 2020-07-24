import React from "react";

const FormInputError = ({ text }) => (
  <span
    style={{
      color: "#dc3545",
      width: "100%",
      marginTop: "0.25rem",
      fontSize: "80%",
    }}
  >
    {text}
  </span>
);

export default FormInputError;
