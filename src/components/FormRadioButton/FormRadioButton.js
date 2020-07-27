import React from "react";
import { CustomInput } from "reactstrap";
import { useField } from "formik";

import FormInputError from "../FormInputError";

function FormInput({ ariaLabel, id, name, label, value, defaultChecked }) {
  const [field, meta] = useField(name);

  return (
    <>
      <CustomInput
        {...field}
        ariaLabel={ariaLabel}
        id={id}
        name={field.name}
        type='radio'
        label={label}
        inline
        defaultChecked={defaultChecked}
        value={value}
        valid={meta.touched === true && !meta.error}
        invalid={meta.touched === true && typeof meta.error !== "undefined"}
      />
      {/* {meta.touched === true && typeof meta.error !== "undefined" && (
        <FormInputError text={meta.error} />
      )} */}
    </>
  );
}

export default FormInput;
