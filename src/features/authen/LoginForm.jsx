import React, { useState } from "react";

import useAuth from "../../hooks/useAuth";

function LoginForm() {
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
   
    try {
      await login(loginInput);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          className="input input-bordered rounded-md border w-full py-2 px-4"
          value={loginInput.username}
          onChange={(e) =>
            setLoginInput({ ...loginInput, username: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="input input-bordered rounded-md border w-full py-2 px-4"
          value={loginInput.password}
          onChange={(e) =>
            setLoginInput({ ...loginInput, password: e.target.value })
          }
        />
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-6 rounded-full" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
