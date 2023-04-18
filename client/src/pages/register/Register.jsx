import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../components/layout/layout.css";
function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("register successfully");
      navigate("/login");
    } else console.log("login failed");
  }
  return (
    <div className="container">
      <h1>Register with us</h1>
      <form onSubmit={registerUser} className="form_container">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <label htmlFor="password">Password</label>

        <input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Register" className="submit_btn" />
      </form>
      <button className="login_btn" onClick={() => navigate("/login")}>
        log in
      </button>
    </div>
  );
}

export default RegisterPage;
