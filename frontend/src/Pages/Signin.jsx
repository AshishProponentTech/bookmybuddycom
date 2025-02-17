import { useState } from "react";
import React from "react";

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true);

  // Handle Toggle Click
  const handleToggle = (loginState) => {
    setIsLogin(loginState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Welcome</h2>
        <p className="text-gray-500 text-center">Sign up or sign in to continue</p>

        {/* Toggle Button */}
        <div className="flex bg-gray-200 rounded-full p-1 mt-4">
          <button
            type="button"
            className={`flex-1 py-2 text-center rounded-full font-semibold ${
              isLogin ? "bg-white shadow text-black" : "text-gray-500"
            }`}
            onClick={() => handleToggle(true)}
          >
            Login
          </button>
          <button
            type="button"
            className={`flex-1 py-2 text-center rounded-full font-semibold ${
              !isLogin ? "bg-white shadow text-black" : "text-gray-500"
            }`}
            onClick={() => handleToggle(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="mt-6">
          {!isLogin && (
            <>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring focus:ring-orange-300" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring focus:ring-orange-300" 
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone"
                  className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring focus:ring-orange-300" 
                />
              </div>
              <div className="mt-2">
                <label className="text-sm font-medium text-gray-700">Address</label>
                <input 
                  type="text" 
                  placeholder="Enter your address"
                  className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring focus:ring-orange-300" 
                />
              </div>
            </>
          )}

          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring focus:ring-orange-300" 
            />
          </div>

          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              placeholder="Enter password"
              className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring focus:ring-orange-300" 
            />
          </div>

          {!isLogin && (
            <div className="mt-2">
              <label className="text-sm font-medium text-gray-700">Re-enter Password</label>
              <input 
                type="password" 
                placeholder="Re-enter password"
                className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring focus:ring-orange-300" 
              />
            </div>
          )}

          {/* Remember Me & Forgot Password */}
          {isLogin && (
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="text-orange-500 mr-2" />
                <span className="text-gray-600 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-orange-500 text-sm font-semibold">
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-orange-600"
          >
            {isLogin ? "LOGIN" : "SIGN UP"}
          </button>
        </form>
      </div>
    </div>
  );
}
