import React from "react";
import { useState } from "react";
import "../../components/layout/layout.css";
import { useNavigate } from "react-router";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      navigate("/books");
    } else {
      alert("Please check your username and password");
    }
    // navigate("/books");
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={loginUser} className="form_container">
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
        <input type="submit" value="Login" className="submit_btn" />
      </form>
    </div>
  );
}

export default LoginPage;
