import React from "react";
import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";

function Register() {
  //Initial State of our form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  //Deconstruct the form data
  const { name, email, password, password2 } = formData;

  const onChange = () => {};

  return (
    <div>
      <section className="heading">
        <FaUserAlt />
        <h1>Register</h1>
        <p>Please Create an account</p>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="text"
              value={name}
              id="name"
              onChange={onChange}
              className="form-control"
              placeholder="Enter your name here..."
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              value={email}
              id="email"
              onChange={onChange}
              className="form-control"
              placeholder="Enter your email here..."
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              id="password"
              onChange={onChange}
              className="form-control"
              placeholder="Enter your password here..."
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password2}
              id="password2"
              onChange={onChange}
              className="form-control"
              placeholder="Confirm password"
            />
          </div>
        </form>
        <div className="form-group"> 
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        </div>
      </section>
    </div>
  );
}

export default Register;
