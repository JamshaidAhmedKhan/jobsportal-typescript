import React from "react";

const Login: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex justify-center items-center flex-col">
          <h2 className="font-bold">LOGIN</h2>
          <form className="w-full flex flex-col justify-center items-center">
            {/* Email Field */}
            <div className="w-1/2 mt-5">
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Password Field */}
            <div className="w-1/2 mt-4 mb-7">
              <label
                htmlFor="password"
                className="block text-md font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-1/2 px-4 py-2 text-white bg-primary rounded-md hover:bg-primary focus:ring-4 focus:ring-primary focus:ring-opacity-50"
            >
              Login
            </button>
            <div className="flex justify-end w-1/2 mt-1">
              <button className="text-primary underline">
                Forget Password?
              </button>
            </div>
          </form>
        </div>
        <div className="bg-primary flex justify-center items-center rounded-s-[25px]">
          <img
            src="/images/login.png"
            alt=""
            className="max-h-[450px] my-0 py-0"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
