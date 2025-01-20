import React from "react";

function AuthLayouts({ children, title }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs border p-5 rounded-md">
        <h1 className="text-3xl text-center font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-5">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    </div>
  );
}

export default AuthLayouts;
