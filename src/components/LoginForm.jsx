import React, { useState, useContext } from "react";
import { publicFetch } from "../lib/fetch";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await publicFetch.post("authenticate", {
        email,
        password,
      });
      authContext.setAuthState(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center px-8 py-6 text-left bg-white shadow-lg">
      <h3 className="text-2xl font-bold">Login to your account</h3>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-baseline justify-between">
          <button
            type="submit"
            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
            Login
          </button>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forget password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
