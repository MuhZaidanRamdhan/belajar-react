import React from "react";
import { Link } from "react-router-dom";

function AuthLayouts({ children, title, type }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs border p-5 rounded-md">
        <h1 className="text-3xl text-center font-bold mb-2 text-blue-600">
          {title}
        </h1>
        <p className="font-medium text-slate-500 mb-5">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
}

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Dont have an account?{" "}
        <Link to={"/register"} className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to={"/login"} className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
