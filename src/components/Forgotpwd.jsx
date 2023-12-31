import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Forgotpwd.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Axios from "axios";
import md5 from "md5";
import { USER_SERVER } from "../constants";
function Forgotpwd() {
  const [mail, setMail] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [rpwd, setRpwd] = useState("");
  const [eotp, setEotp] = useState("");
  const [ch, setCh] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    ///alert(ch);
    emailjs
      .sendForm(
        "service_hf5pzzg",
        "template_bc9f6uk",
        form.current,
        "LMTGealAZ7vCqcmRt"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("otp sent to your mail address 🙂", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Unable to send message try after sometime 🙃", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          toast.warn("Check your internet connection", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };
  const handleclick = () => {
    //alert(ch);
    if (cpwd != rpwd) {
      toast.error("Passwords not match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (ch != eotp) {
      toast.error("OTP not match. re-enter otp", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      //backend process
      const formData = new FormData();
      formData.append("email", mail);
      formData.append("password", md5(cpwd));
      Axios.put(`${USER_SERVER}/update-password`, formData)
        .then((res) => {
          if (res.status === 200) {
            alert("password updated");
            window.location.href = "./#/login";
          } else {
            alert(res.error);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container-fluid forgotpwd">
      <form ref={form} onSubmit={sendEmail} className="container bg-dark">
        <h2>Forgot Password</h2>
        <div className="mb-3 mt-4">
          <label for="mail" className="form-label float-start">
            Email
          </label>
          <input
            type="email"
            name="mail"
            className="form-control"
            id="mail"
            placeholder="Enter your mail id"
            onChange={(e) => {
              setMail(e.target.value);
              setCh(Math.floor(Math.random() * 1000000 + 1));
            }}
            title="enter registered mail id"
            required
          />
          <input type="hidden" id="otp" value={ch} name="otp" />
          <button
            type="submit"
            className="btn btn-outline-warning w-50 mt-4"
            value="Submit"
          >
            Get OTP
          </button>
        </div>
      </form>
      <br />
      <br />
      <form className="container bg-dark" onSubmit={handleclick}>
        <h1>Reset password</h1>
        <label for="cpwd" className="form-label float-start">
          Confirm Password
        </label>
        <input
          type="password"
          id="cpwd"
          className="form-control"
          onChange={(e) => {
            setCpwd(e.target.value);
          }}
          minLength={8}
          maxLength={16}
          required
        />
        <label for="rpwd" className="form-label float-start">
          Re Enter Password
        </label>
        <input
          type="password"
          id="rpwd"
          className="form-control"
          onChange={(e) => {
            setRpwd(e.target.value);
          }}
          minLength={8}
          maxLength={16}
          required
        />
        <label for="eotp" className="form-label float-start">
          Enter OTP
        </label>
        <input
          type="password"
          id="eotp"
          className="form-control"
          onChange={(e) => {
            setEotp(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="btn btn-outline-warning w-50 mt-4"
          value="Submit"
        >
          Reset
        </button>
        <Link to="/login">Login</Link>
      </form>

      <ToastContainer />
    </div>
  );
}
export default Forgotpwd;
