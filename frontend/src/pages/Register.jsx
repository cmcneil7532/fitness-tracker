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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      //Create our key value pair
      [e.target.name]: [e.target.value],
    }));
  };
  const onSubmit = (e) => {
    //Prevent default behvior in this case the page will not reload once our form in submitted
    e.preventDefault();
  };

  return (
    <div>
      <section className="heading">
        <FaUserAlt />
        <h1>Register</h1>
        <p>Please Create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              name="name"
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
              name="email"
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
              name="password"
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
              name="password2"
              type="password"
              value={password2}
              id="password2"
              onChange={onChange}
              className="form-control"
              placeholder="Confirm password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
