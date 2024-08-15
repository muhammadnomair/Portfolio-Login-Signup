"use client";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Button, CustomInput, Zoom } from "@/components";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useState } from "react";
import Link from "next/link";

const validationSchema = yup.object().shape({
  userName: yup.string().required("This is a required field."),
  password: yup.string().required("This is a required field."),
});

const initialValues = {
  userName: "",
  password: "",
};

export const LoginForm = () => {
  const router = useRouter();
  const [loader, setloader] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const { error } = await signIn("credentials", {
        username: values.userName,
        password: values.password,
        redirect: false,
      });
      if (!error) {
        setloader(false);
        toast.success("Login successfully!");
        router.push("/dashboard");
      } else {
        setloader(false);
        toast.error("Authentication failed!");
        throw new Error(`Authentication failed: ${error}`);
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };
  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setloader(true);
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="flex flex-col gap-[24px]">
            <CustomInput
              label="E-Mail Address "
              name="userName"
              placeholder="email address"
              type="text"
            />
            <CustomInput
              label="Password"
              name="password"
              placeholder="••••••••"
              type="password"
            />
            <Zoom>
              {loader ? (
                <Button type="submit" loader />
              ) : (
                <Link href="/dashboard">
                  <Button text="Login" type="submit" filled />
                </Link>
              )}
            </Zoom>
          </Form>
        )}
      </Formik>
    </div>
  );
};
