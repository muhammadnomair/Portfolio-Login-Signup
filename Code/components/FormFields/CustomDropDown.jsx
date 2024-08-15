"use client";
import { Field, ErrorMessage } from "formik";

export const CustomDropDown = ({ fieldName, options, label, isJson }) => {
  return (
    <div className="-mt-[6px]">
      <label className=" text-[12px] pl-[4px] select-none text-primary-space">
        {label}
      </label>

      <Field
        as="select"
        name={fieldName}
        className="w-full h-[40px] cursor-pointer border border-solid border-form-input outline-none p-[9px] text-[14px] text-primary-form-field rounded-[4px] focus:shadow-md focus:border-primary-btn-blue transition-all bg-[rgba(239,241,243,1)]  "
      >
        <option className="text-primary-form-field" value="">
          Select&nbsp;{fieldName}...
        </option>
        {isJson
          ? options.map((el, idx) => {
            return (
              <option
                className="text-primary-form-field"
                value={el.value}
                key={idx.toString()}
              >
                {el.name}
              </option>
            );
          })
          : options.map((el, idx) => {
            return (
              <option
                className="text-primary-form-field"
                value={el}
                key={idx.toString()}
              >
                {el}
              </option>
            );
          })}
      </Field>
      <ErrorMessage
        name={fieldName}
        component="div"
        className="error text-primary-warning pl-[4px] text-[12px]"
      />
    </div>
  );
};
