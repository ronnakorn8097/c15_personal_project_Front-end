import React from "react";
import { useState } from "react";
import { PiCoffeeLight } from "react-icons/pi";
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";

function Login() {
  // const [input, setInput] = useState({
  //   username: "",
  //   password: "",
  // });

  return (
    <div className="bg-zinc-200 grid grid-cols-2">
      <div className="">
        <img
          src="../../public/LOGO.jpeg"
          alt="#"
          className="w-full h-screen "
        />
      </div>
      <div className="">
        <div className="flex flex-row justify-center my-24 space-x-6">
          <PiCoffeeLight className="text-7xl " />
          <h1 className="flex justify-center items-center text-6xl font-bold">
            สามารถ POS
          </h1>
        </div>

        {/* div username / password */}
        <div className=" mx-60">
          <div className="space-y-4 py-10">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
