import React from "react";
import { Form } from "react-bootstrap";
import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container}>
            <h1>Profile</h1>
            <input
              type="text"
              placeholder="Emp ID"
              name="empId"
              //onChange={handleChange}
              //value={data.empId}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              //onChange={handleChange}
              // value={data.fullName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              //onChange={handleChange}
              //value={data.address}
              required
              className={styles.input}
            />
            <input
              type="phone"
              placeholder="Phone"
              name="phone"
              // onChange={handleChange}
              // value={data.phone}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              // onChange={handleChange}
              // value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              //onChange={handleChange}
              //value={data.password}
              required
              className={styles.input}
            />
            <Form.Select
              aria-label="Default select example"
              className={styles.select}
            >
              <option>Select Role</option>
              <option value="Customer Maneger">Customer Maneger</option>
              <option value="Employee Manager">Employee Manager</option>
              <option value="Menu Maneger">Menu Maneger</option>
              <option value="Order Maneger">Order Maneger</option>
              <option value="Delivery Manager">Delivery Manager</option>
              <option value="Stock Maneger">Stock Maneger</option>
              <option value="Supplier Maneger">Supplier Maneger</option>
              <option value="Financial Manager">Financial Manager</option>
            </Form.Select>
            {/* {error && <div className={styles.error_msg}>{error}</div>} */}
            <button type="submit" className={styles.green_btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
