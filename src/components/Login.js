import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      var data = await axios
        .post("https://gmailbackend.herokuapp.com/login", values)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return alert("Incorrect UserName or Password");
        });

      var userdata = await axios
        .get("https://gmailbackend.herokuapp.com/viewall")
        .then((res) => {
          return res.data;
        });
      //
      const checkuser = await userdata.filter((data) => {
        return data.email === values.email;
      });
      if (checkuser !== 0) {
        sessionStorage.setItem("from", checkuser[0].email);
        sessionStorage.setItem("username", checkuser[0].username);
        navigate("/home");
      } else {
        alert("Please Register New Account");
      }
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
            Login to the Gmail
          </p>
          <p>Please fill in this form to SignIn to Your account.</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <input
                  type="email"
                  placeholder="Enter Your Mail-ID..."
                  className="form-control inputfield"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
                <input
                  type="password"
                  placeholder="Enter Your Password..."
                  className="form-control inputfield"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                />
                <br></br>
                <div className="button-r">
                  <a>Don't_have_an_Account_?</a>
                  <Link to="/register">
                    <button className="btn btn-outline-success">Register</button>
                  </Link>
                  <br></br>
                  <a>Already_have_an_Account_!</a>
                 
                  <button className="btn btn-outline-success" type="submit">
                    Login
                  </button>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
