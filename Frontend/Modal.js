import React, { useState } from "react";
import cors from "cors";

const Modal = ({ handleCloseModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleLogin = () => {
    setErrors([]);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validationErrors = [];

    if (!emailRegex.test(username)) {
      validationErrors.push("Invalid email format");
    }

    if (password.length < 8) {
      validationErrors.push("Password should be at least 8 characters long");
    }

    if (!username || !password) {
      validationErrors.push("Please provide both email and password");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    cors();
    fetch("http://localhost:5131/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid email or password");
        }
      })
      .then((data) => {
        setModalMessage(`Welcome, ${data.name}`);
        setIsModalOpen(true);
      })
      .catch((error) => {
        setErrors([error.message]);
      })
      .finally(() => {
        setUsername("");
        setPassword("");
      });
  };
  const loginHeadingStyle = {
    fontSize: "24px",
  };

  const registerLinkStyle = {
    color: "green",
    fontWeight: "normal",
  };

  const lineStyle = {
    borderTop: "1px solid #ccc",
    margin: "10px 0",
  };

  const labelStyle = {
    fontSize: "12px",
  };

  const closeModalStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "20px",
    color: "green",
    cursor: "pointer",
    background: "none",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "75%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "4px",
          textAlign: "center",
          width: "400px",
          position: "relative",
        }}
      >
        <button onClick={handleCloseModal} style={closeModalStyle}>
          &#10005;
        </button>
        <h1 style={loginHeadingStyle}>Login</h1>
        <h1 style={{ fontSize: "14px", marginTop: "10px" }}>
          New Customer ?{" "}
          <a href="#" style={registerLinkStyle}>
            Register here
          </a>
        </h1>
        <hr style={lineStyle} />
        <form>
          <label
            htmlFor="username"
            style={{ ...labelStyle, textAlign: "left" }}
          >
            Username
          </label>
          <br />
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", height: "30px" }}
          />
          <br />
          <br />
          <label
            htmlFor="password"
            style={{ ...labelStyle, textAlign: "left" }}
          >
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", height: "30px" }}
          />
          <br />
          <br />
          {errors.length > 0 && (
            <ul style={{ color: "red", textAlign: "left" }}>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={handleLogin}
            style={{
              backgroundColor: "#00a826",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "8px 16px",
              cursor: "pointer",
              width: "50%",
              height: "40px",
            }}
          >
            Login
          </button>

          <br />
          <a href="#" style={{ fontSize: "12px", color: "green" }}>
            Forgot username/password
          </a>
        </form>
      </div>
    </div>
  );
};

export default Modal;
