import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);

      // Check if email matches pattern for admin or employee email
      const adminPattern = /^admin\d*@/;
      const empPattern = /^emp\d*@/;
      const menuPattern = /^mm\d*@/;
      const deliveryPattern = /^dm\d*@/;
      const orderPattern = /^om\d*@/;
      const supplierPattern = /^sum\d*@/;
      const stockPattern = /^stm\d*@/;
      const financePattern = /^fm\d*@/;
      if (adminPattern.test(data.email)) {
        navigate("/admindash");
      } else if (empPattern.test(data.email)) {
        navigate("/empdash");
      } else if (menuPattern.test(data.email)) {
        navigate("/menudash");
      } else if (deliveryPattern.test(data.email)) {
        navigate("/deliverydash");
      } else if (orderPattern.test(data.email)) {
        navigate("/orderdash");
      } else if (supplierPattern.test(data.email)) {
        navigate("/supplierdash");
      } else if (stockPattern.test(data.email)) {
        navigate("/stockdash");
      } else if (financePattern.test(data.email)) {
        navigate("/financedash");
      } else {
        setError("Invalid email address");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Login;
