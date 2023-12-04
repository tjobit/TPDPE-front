import React, { CSSProperties } from "react";
import LoginBackground from "../assets/img/LoginBackground.svg";
import { Colors } from "../assets/colors";
import { register, login } from "../API";
import { useNavigate } from "react-router-dom";

const styles = {
  main: {
    display: "flex",
  },
  formContainer: {
    width: "50%",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: "70px",
    fontWeight: "bold",
    color: Colors.darkBlue,
  },
  input: {
    backgroundColor: Colors.greyBlue,
    color: "white",
    width: "400px",
    height: "50px",
    fontSize: "20px",
    padding: "10px",
    border: "none",
    borderRadius: "15px",
  },
  btn: {
    backgroundColor: Colors.darkBlue,
    padding: "20px 60px",
    cursor: "pointer",
    borderRadius: "50px",
    fontWeight: "bold",
    fontSize: "30px",
    border: "none",
    color: "white",
  },
};

function LoginRegister() {
  const navigate = useNavigate();

  async function loginHandler() {
    const email = (document.getElementById("emailLogin") as HTMLInputElement)
      .value;
    const password = (
      document.getElementById("passwordLogin") as HTMLInputElement
    ).value;
  
    const data = await login(email, password);

    if (data) {
      navigate("/searchMap");
    }
  }
  
  async function registerHandler() {
    const username = (
      document.getElementById("usernameRegister") as HTMLInputElement
    ).value;
    const email = (document.getElementById("emailRegister") as HTMLInputElement)
      .value;
    const password = (
      document.getElementById("passwordRegister") as HTMLInputElement
    ).value;
  
    const data = await register(username, email, password);
  
    if (data) {
      navigate("/searchMap");
    }
  }
  

  return (
    <div>
      <img
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100%",
        }}
        src={LoginBackground}
        alt="Login"
      />
      <div style={styles.main as CSSProperties}>
        <div style={styles.formContainer as CSSProperties}>
          <h1 style={styles.title}>Login</h1>
          <input
            id="emailLogin"
            style={styles.input}
            type="text"
            placeholder="Email"
          />
          <input
            id="passwordLogin"
            style={styles.input}
            type="password"
            placeholder="Password"
          />
          <button onClick={loginHandler} style={styles.btn} type="submit">
            Login
          </button>
        </div>
        <div style={styles.formContainer as CSSProperties}>
          <h1 style={styles.title}>Register</h1>
          <input
            id="usernameRegister"
            style={styles.input}
            type="text"
            placeholder="Username"
          />
          <input
            id="emailRegister"
            style={styles.input}
            type="text"
            placeholder="Email"
          />
          <input
            id="passwordRegister"
            style={styles.input}
            type="password"
            placeholder="Password"
          />
          <button onClick={registerHandler} style={styles.btn} type="submit">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
