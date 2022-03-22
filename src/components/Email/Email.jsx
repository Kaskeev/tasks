import React, { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInput = (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);
  };

  const handleAdd = () => {
    const newObj = {
      email,
      password,
      confirmPassword,
    };
    console.log(setEmail(newObj));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={handleInput}
        value={email}
      />
      <input type="text" placeholder="Password" />
      <input
        type="text"
        placeholder="Confirm Password"
        onChange={handleInput}
        value={confirmPassword}
      />
      <button onClick={handleAdd}>Continue</button>
    </div>
  );
};

export default Email;
