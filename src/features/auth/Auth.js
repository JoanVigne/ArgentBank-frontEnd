import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";
import { setProfile } from "../profile/profileSlice";
import { useNavigate } from "react-router-dom";
import ErrorLogin from "../../components/errorLogin";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function formSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      dispatch(setToken(result.body.token));
      fetchUserData(result.body.token);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError("block");
    }
  }

  // IF ON A UN TOKEN, ON FETCH LE PROFILE
  async function fetchUserData(token) {
    /*     if (token === null) {
      return;
    } */
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: "Bearer" + token,
          },
        }
      );
      const result = await response.json();
      // JE MET LE PROFILE DANS LE STORE
      dispatch(setProfile(result.body));
      // JE REDIRIGE VERS /profile
      navigate("/user/profile");
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  }

  // erreur login
  const [error, setError] = useState("none");

  return (
    <form onSubmit={formSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
      <div style={{ display: error }}>
        <ErrorLogin />
      </div>
    </form>
  );
};

export default Auth;
