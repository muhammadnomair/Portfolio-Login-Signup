"use client";
import * as yup from "yup";
import { useState } from "react";
import { Form, Formik } from "formik";
import {
  Button,
  CustomInput,
  Zoom,
} from "@/components";
import { createUser } from "./routes";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const regEx = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{2})((-?)|( ?))([0-9]{7})$/gm;
const validationSchema = yup.object().shape({
  fullName: yup.string().required("This is a required field."),
  email: yup
    .string()
    .email("Email is invalid.")
    .required("This is a required field."),
  password: yup.string().required("This is a required field."),
  confirmPassword: yup
    .string()
    .required("This is a required field.")
    .oneOf([yup.ref("password"), null], "Please enter the same value again."),
  city: yup.string().required("This is a required field."),
  phone: yup
    .string()
    .matches(regEx, "Phone Number is not Valid")
    // .phone("PK", true, "${path} is invalid")
    .required("This is a required field."),
  area: yup.string().required("This is a required field."),
  phase: yup.string().required("This is a required field."),
});

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  city: "",
  phone: "",
  area: "",
  phase: "",
  customerType: "User",
};

export const SignupForm = () => {
  const router = useRouter();
  const [loader, setloader] = useState(false);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          setloader(true);
          if (values.customerType) {
            values.customerType = "User";
          }
          const res = await createUser(values);

          if (res.status === 200) {
            router.push("/otp-verification");
          } else {
            toast.error("Please enter all Information!");
          }
          setloader(false);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="">
            <div className="grid sm:grid-cols-2 gap-[20px] mb-[45px]">
              <CustomInput
                label="Full Name"
                name="fullName"
                placeholder="Ladushing GTG"
                type="text"
              />
              <CustomInput
                label="E-Mail Address"
                name="email"
                placeholder="john@example.com"
                type="email"
              />
              <CustomInput
                label="Password"
                name="password"
                placeholder="••••••••"
                type="password"
              />
              <CustomInput
                label="Re-type Password"
                name="confirmPassword"
                placeholder="••••••••"
                type="password"
              />
              <CustomInput
                label="City"
                name="city"
                placeholder="Lahore"
                type="text"
              />
              <CustomInput
                label="Phone Number"
                name="phone"
                placeholder="+92 333 1236547"
                type="text"
              />
              <CustomInput
                label="Area"
                name="area"
                placeholder="DHA"
                type="text"
              />
              <CustomInput
                label="Phase/Block"
                name="phase"
                placeholder="Phase 4"
                type="text"
              />
            </div>
            <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-[20px] items-center justify-center">
              <div />
              <Zoom>
                {loader ? (
                  <Button type="submit" loader />
                ) : (
                  <Button text="Sign Up" type="submit" filled />
                )}
              </Zoom>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
