import { Link } from "react-router-dom";
import img from "../../assets/images/image 1.svg";
import logo from "../../assets/Logo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import eye from "../../assets/images/Eye.svg";
import eyeOff from "../../assets/images/eye-cross_1.svg";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const userSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("The input is required"),
    password: Yup.string().required("The input is required"),
  });
  const handleLogin = async () => {
    setLoading(true);
    console.log("hello");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: userSchema,
  });

  return (
    <div className="flex">
      <div className="p-5 my-auto lg:px-28 lg:py-16 lg:w-1/2">
        <div className="text-center px-7">
          <img className="mx-auto pb-8" src={logo} alt="logo eventafy" />
          <h1 className="text-[32px] font-semibold text-gray-800 ">
            Welcome back to eventafy
          </h1>
          <p className="text-gray-500">
            Login with your email and password you have been created before, or
            you can create account if you don’t have a eventafy account
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block my-1 text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              className=" border border-gray-100 text-gray-400 text-sm font-light rounded-lg block w-full p-2.5 focus:ring-gray-800 focus:border-gray-800 focus-visible:outline-gray-800"
            />
            <p className="text-gray-500 font-light text-sm ps-2">
              {formik.touched.email && formik.errors.email}
            </p>
          </div>
          <div className="mb-3 relative">
            <label
              htmlFor="password"
              className="block my-1 text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type={type}
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className=" border border-gray-100 text-gray-400 text-sm font-light rounded-lg block w-full p-2.5 focus:ring-gray-800 focus:border-gray-800 focus-visible:outline-gray-800"
            />
            <span className=" absolute right-2 top-9 " onClick={handleToggle}>
              <img src={icon} alt="show/hide password" />
            </span>
            <p className="text-gray-500 text-sm font-light ps-2">
              {formik.touched.password && formik.errors.password}
            </p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                onChange={formik.handleChange}
              />
              <label
                htmlFor="checkbox"
                className=" ms-2 text-gray-400 font-light"
              >
                Keep me sign-in to Camero
              </label>
            </div>
            <Link className=" underline text-gray-800" to="/ForgetPassword">
              Forgot password?
            </Link>
          </div>
          {loading ? (
            <button className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm text-center py-2.5">
              Login Now
            </button>
          ) : (
            <button
              type="submit"
              className=" text-white bg-gray-800 w-full hover:bg-gray-900 font-medium rounded-lg text-sm py-2.5 text-center"
            >
              Login Now
            </button>
          )}
          <div className="flex items-center py-6">
            <div className=" flex-1 border-t  border-gray-100 me-4"></div>
            <p className="text-gray-600 font-light text-sm">Or continue with</p>
            <div className="flex-1 border-t border-gray-100 ms-4"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 h-10 px-4 border border-gray-100 rounded-lg hover:bg-gray-50"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 h-10 px-4 border border-gray-100 rounded-lg hover:bg-gray-50"
            >
              <img
                src="https://www.facebook.com/favicon.ico"
                alt="Facebook"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>
        </form>
        <div className="mt-4 lg:mt-6 text-center font-light text-sm">
          <span className="pe-2 text-gray-400">Don't have an account?</span>
          <Link
            to={"/register"}
            className=" font-medium text-gray-800 underline hover:text-[#FB7145]"
          >
            Create account
          </Link>
        </div>
      </div>
      <div className=" hidden lg:block w-1/2">
        <img className="w-full h-full object-cover" src={img} alt="eventafy" />
      </div>
    </div>
  );
}
