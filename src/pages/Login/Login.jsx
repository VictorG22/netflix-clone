import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import site_spinner from '../../assets/site-spinner.png'
import { login, signup } from "../../firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return (
    loading? <div className="loading__spinner">
      <img className="spinner" src={site_spinner} alt="" />
    </div>:
    <div className="sign-up">
      <img src={logo} className="sign-up__logo" alt="" />
      <div className="sign-up__form">
        <h1 className="sign-up__form--title"> {signState} </h1>
        <form className="sign-up__form--container">
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="sign-up__form--input"
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="sign-up__form--input"
            type="email"
            placeholder="your@email.com"
          />
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="sign-up__form--input"
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit" className="sign-up__btn">
            {signState}
          </button>
          <div className="form__help">
            <div className="user__remember-me--option">
              <input className="user__checkbox" type="checkbox" />
              <label htmlFor="Remember Me">Remember Me</label>
            </div>
            <p className="help__user">Need Help?</p>
          </div>
        </form>
        <div className="form__switch">
          {signState === "Sign In" ? (
            <p className="form__switch--options">
              New to Netflix?{" "}
              <span
                className="form__switch--option"
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p className="form__switch--options">
              ALready have an account?{" "}
              <span
                className="form__switch--option"
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
