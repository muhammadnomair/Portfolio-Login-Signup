"use client";

import { Field } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff, FiSearch } from "react-icons/fi";

export const CustomInput = ({
  name,
  label,
  placeholder,
  type,
  link,
  dashboardInput,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          // form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => {
          const isError = meta.touched && meta.error;
          return (
            <div className="w-full">
              <div className="w-full flex justify-between">
                <label className=" text-[12px] pl-[4px] select-none text-primary-space">
                  {label}
                </label>
                {link || null}
              </div>
              <div
                className={`h-[42px] w-full ${type === "password" ? "relative" : ""
                  } ${name === "search" ? "relative" : ""}
                ${name === "address" ? "relative" : ""}
               `}
              >
                {name === "search" ? (
                  <div className="absolute left-[10px] top-[50%] -translate-y-[50%] cursor-pointer ">
                    <FiSearch style={{ color: "grey" }} />
                  </div>
                ) : null}
                <input
                  className={`w-full h-[42px] text-primary-space items-center border-transparent   outline-none p-[9px] text-[14px]  rounded-[4px] focus:shadow-md focus:border-primary-btn-blue transition-all bg-[#ecf0f1] ${isError ? "border-primary-warning shadow-md" : ""
                    } ${name === "search" ? "pl-[30px]" : ""}
                  ${dashboardInput
                      ? "bg-[rgba(239,241,243,1)] "
                      : "bg-[rgba(250,250,250,1)]"
                    }
                `}
                  placeholder={placeholder}
                  type={type === "password" && show ? "text" : type}
                  {...field}
                />
                {name === "address" ? (
                  <div className="absolute right-[10px] top-[50%] -translate-y-[50%]">
                    <img
                      src="/icons/ad-post/location.png"
                      alt="Location"
                      className="w-[25px]"
                    />
                  </div>
                ) : null}
                {type === "password" ? (
                  <div
                    className="absolute right-[10px] top-[50%] -translate-y-[50%] cursor-pointer"
                    onClick={() => setShow((show) => !show)}
                  >
                    {show ? (
                      <FiEye style={{ color: "#464646" }} />
                    ) : (
                      <FiEyeOff style={{ color: "#464646" }} />
                    )}
                  </div>
                ) : null}
              </div>
              {isError && (
                <div className="text-primary-warning pl-[4px] text-[12px]">
                  {meta.error}
                </div>
              )}
            </div>
          );
        }}
      </Field>
    </>
  );
};
