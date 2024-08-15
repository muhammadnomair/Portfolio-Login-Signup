"use client";

import { Field, useFormikContext } from "formik";
export const CustomCheckBox = ({ name, label }) => {
  return (
    <>
      <Field name={name}>
        {({ field, meta }) => {
          // const { getFieldProps, meta } = useFormikContext();
          const isError = meta.touched && meta.error;
          return (
            <div className=" items-center mt-2">
              {isError && (
                <div className="text-primary-warning pl-[22px] text-[12px]">
                  This field is required
                </div>
              )}
              <div className="flex items-center custom_checkbox">
                <input
                  className="w-4 h-4 text-[rgba(212,38,69,1)] rounded focus:ring-[rgba(212,38,69,1)] cursor-pointer "
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  {...field}
                />
                <label className="ml-2 text-[16px] text-primary-space">
                  {label}
                </label>
              </div>
            </div>
          );
        }}
      </Field>
    </>
  );
};
