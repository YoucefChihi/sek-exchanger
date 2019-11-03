import React, { useEffect, useState, Fragment } from "react";
import { handleLogin } from "../handlers";

export default () => {
  const [message, setMessage] = useState("Login Page");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const login = async () => {
      await handleLogin({ setLoading, setMessage });
    };
    login();
  }, []);
  const loadingClassName = `loading${loading ? " open" : ""}`;
  return (
    <Fragment>
      <div className={loadingClassName}>Loading ...</div>
      <div className="message">
        <div>{message}</div>
        <div>
          <a className="cta" href="/">
            Go Home
          </a>
        </div>
      </div>
    </Fragment>
  );
};
