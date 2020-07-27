import React from "react";
import MaskedInput from "react-text-mask";
import { Input } from "reactstrap";
import { useField } from "formik";

import FormInputError from "../FormInputError";

function FormInput({ ariaLabel, name, type, placeholder, mask }) {
  const [field, meta] = useField(name);

  return (
    <>
      {mask ? (
        <Input
          {...field}
          ariaLabel={ariaLabel}
          name={field.name}
          type={type}
          placeholder={placeholder}
          tag={MaskedInput}
          mask={mask}
          valid={meta.touched === true && !meta.error}
          invalid={meta.touched === true && typeof meta.error !== "undefined"}
        />
      ) : (
        <Input
          {...field}
          ariaLabel={ariaLabel}
          name={field.name}
          type={type}
          placeholder={placeholder}
          valid={meta.touched === true && !meta.error}
          invalid={meta.touched === true && typeof meta.error !== "undefined"}
        />
      )}
      {meta.touched === true && typeof meta.error !== "undefined" && (
        <FormInputError text={meta.error} />
      )}
    </>
  );
}

export default FormInput;
