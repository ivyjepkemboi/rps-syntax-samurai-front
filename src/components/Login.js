import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Login</h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await axios.post("/api/login", values);
              if (response.status === 200) {
                navigate("/play");
              }
            } catch (error) {
              console.error("Error logging in", error);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-6">
              <div>
                <Field 
                  name="username" 
                  type="text" 
                  placeholder="Username" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {touched.username && errors.username ? (
                  <div className="text-red-500 text-sm mt-1">{errors.username}</div>
                ) : null}
              </div>
              <div>
                <Field 
                  name="password" 
                  type="password" 
                  placeholder="Password" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {touched.password && errors.password ? (
                  <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                ) : null}
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
