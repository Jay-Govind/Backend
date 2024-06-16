import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="Enter name"
        type="text"
        id="fullName"
        value={formData.fullName}
        name="fullName"
        onChange={handleInput}
      />

      <br />
      <br />

      <label htmlFor="userName">User Name</label>
      <input
        placeholder="Enter username"
        type="text"
        id="userName"
        value={formData.userName}
        name="userName"
        onChange={handleInput}
      />

      <br />
      <br />

      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter password"
        type="password"
        id="password"
        value={formData.password}
        name="password"
        onChange={handleInput}
      />

      <br />
      <br />

      <button>Submit</button>
    </form>
  );
}
