import React from "react";
import { Input } from "reactstrap";
import { useField } from "formik";

import FormInputError from "../FormInputError";

function FormInput({ ariaLabel, name, type, placeholder }) {
  const [field, meta] = useField(name);

  return (
    <>
      <Input
        {...field}
        ariaLabel={ariaLabel}
        name={field.name}
        type={type}
        placeholder={placeholder}
        valid={meta.touched === true && !meta.error}
        invalid={meta.touched === true && typeof meta.error !== "undefined"}
      />
      {meta.touched === true && typeof meta.error !== "undefined" && (
        <FormInputError text={meta.error} />
      )}
    </>
  );
}

export default FormInput;
