import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, Mail, Lock } from "lucide-react";
import axios from "axios";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/User/user.ts";
import { useDispatch } from "react-redux";

const SignInPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await axios.post("/api/user/signin", formData, {
        headers: { "Content-Type": "application/json" },
      });
      const data = res.data;
      dispatch(signInSuccess(data));
      navigate("/home");
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center px-4">
      <div
        className="max-w-md w-full bg-white rounded-lg shadow-lg p-8"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign In to WealthWise
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
                required
              />
              <Mail className="absolute left-3 top-2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="mb-6" data-aos="fade-up" data-aos-delay="400">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
                required
              />
              <Lock className="absolute left-3 top-2 text-gray-400" size={20} />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <LogIn className="mr-2" /> Sign In
          </button>
        </form>
        <p
          className="mt-4 text-center text-gray-600"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
