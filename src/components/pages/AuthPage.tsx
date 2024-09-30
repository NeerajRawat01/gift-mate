import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  authActionType,
  userActionType,
} from "../../store/actions/actions.constants";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  // State to toggle between Sign In and Sign Up
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validation schema for Sign In
  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match") // Replace null with undefined
      .required("Confirm password is required"),
  });

  const afterLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-5 text-center text-indigo-700 tracking-wider drop-shadow-lg">
        Gift <span className="text-pink-600">Mate</span>
      </h1>

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isSignUp ? "Create an Account" : "Sign In to Your Account"}
        </h2>

        <Formik
          initialValues={
            isSignUp
              ? { name: "", email: "", password: "", confirmPassword: "" }
              : { email: "", password: "" }
          }
          validationSchema={isSignUp ? signUpSchema : signInSchema}
          onSubmit={(values) => {
            // Handle sign-in or sign-up logic here
            if (isSignUp) {
              dispatch({
                type: userActionType.CREATE_USER,
                payload: values,
              });
              console.log("Sign Up Form Values:", values);
            } else {
              dispatch({
                type: authActionType.LOGIN_USER,
                payload: { ...values, callback: afterLogin },
              });
              console.log("Sign In Form Values:", values);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? isSignUp
                    ? "Signing Up..."
                    : "Signing In..."
                  : isSignUp
                  ? "Sign Up"
                  : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignUp(false)}
                className="text-indigo-600 hover:underline focus:outline-none"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setIsSignUp(true)}
                className="text-indigo-600 hover:underline focus:outline-none"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
