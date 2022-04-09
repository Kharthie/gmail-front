import React from "react";
import "../css/Register.css";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      username: "",
    },
    onSubmit: async (values) => {
      var data = await axios
        .post("https://gmailbackend.herokuapp.com/register", values)
        .then((res) => {
          return res.data;
        });
      console.log(data);
      navigate("/");
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Gmail-By-Google-PNG-Image.png"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <p className="heading">
            <h1>G M A I L - C L O N E</h1>
            Register A New Account{" "}
          </p>
          <p>Please fill in this form to create an account.</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-2">
                {/* <img
            src="https://www.pngall.com/wp-content/uploads/12/Gmail-By-Google-PNG-Image.png"
            alt=""
          /> */}
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  name="firstname"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  name="lastname"
                />

                <input
                  type="email"
                  placeholder="Enter Your Actual Mail-ID to get a Email"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  name="phone"
                />
                <input
                  type="text"
                  placeholder="UserName"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  name="username"
                />
                <br></br>
                <div className="button-r">
                  <a className="reg-p">Don't_have_an_account_?</a>
                  <button className="btn btn-outline-success" type="submit">
                    Register
                  </button>

                  <a className="reg-s">Already_have_an_account_!</a>

                  <Link to="/">
                    <button className="btn btn-outline-success">SignIn</button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
