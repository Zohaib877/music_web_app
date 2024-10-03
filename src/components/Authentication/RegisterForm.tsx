import React from "react";

const RegisterForm: React.FC = () => {
  return (
    <>
      <div className="hidden max-sm:flex flex-col justify-center items-center">
        <p className="hidden max-sm:block text-borderPrimary font-semibold text-xl mt-20">
          Music App name and logo
        </p>
        <h1 className="text-white text-3xl font-bold mt-14">
          Welcome To
        </h1>
        <p className="text-borderPrimary font-light text-xl">Music App</p>
      </div>
      <h2 className="text-borderPrimary font-light max-sm:text-xl text-2xl max-sm:mb-3 mb-6 max-sm:mt-8 mt-32">
        Sign Up For New account
      </h2>
      <form action="/" className="w-full flex items-center flex-col">
        <div className="h-max py-2 bg-cardDisabled rounded-lg w-full divide-y px-4">
          <div className="my-2 w-full">
            <input
              type="text"
              placeholder="User Name"
              className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none focus:border-none text-white text-left"
            />
          </div>
          <div className="my-2 w-full">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none focus:border-none text-white text-left"
            />
          </div>
          <div className="my-2 w-full">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 pb-2 pt-3 bg-transparent focus:outline-none focus:border-none text-white text-left"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-5/6 rounded-3xl bg-gradient-to-r from-btnGradientFrom to-btnGradientto text-white font-medium py-2 mt-10 hover:font-bold"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default RegisterForm;