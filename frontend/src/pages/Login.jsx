import React, { useState } from "react";
import { MdOutlineLogin } from "react-icons/md";

function Login() {
  //set Inital state of form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //grab the input values from the form data
  const { email, password } = formData;
  const onChange = (e) => {
    //setForm data to an object
    setFormData((prevState) => ({
      //Spread our object
      ...prevState,
      //place in a key value pair
      [e.target.name]: [e.target.value],
    }));
  };
  const handleSubmit = (e) => {
    //Stopping the default behavior
    //Prevent the page fro reloading everytime our button is hit
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <MdOutlineLogin />
        <h1>Login</h1>
        <p>Start tracking your fitness</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              onChange={onChange}
              placeholder="Please enter your email.."
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              onChange={onChange}
              placeholder="Please enter your password.."
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
