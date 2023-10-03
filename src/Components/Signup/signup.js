import React, { useState } from "react";
import "./working.js";
import "./signup.css";
const Signup = () => {
  const [fname, setFname] = useState(""); // Use useState with parentheses, not square brackets
  const [uname, setUname] = useState(""); // Corrected variable names
  const [email, setEmail] = useState(""); // Corrected variable names
  const [mobile, setMobile] = useState(""); // Corrected variable names
  const [isChecked, setIsChecked] = useState(false);

  const [errormsg, setErrormsg] = useState("ax");
  const [errormsg2, setErrormsg2] = useState("ux");
  const [errormsg3, setErrormsg3] = useState("ex");
  const [errormsg4, setErrormsg4] = useState("mb");

  let [final, setFinal] = useState(0);

  //====================================>>
  const handlechecks = (e) => {
    e.preventDefault();
    // Check if any of the input fields are empty
    const isAnyFieldEmpty =
      fname.trim() === "" ||
      uname.trim() === "" ||
      email.trim() === "" ||
      mobile.trim() === "";
 
    // Update the error state based on the visibility of the labels
    const labels = document.querySelectorAll(".Errormsg");
    const anyLabelVisible = [...labels].some((label) => !label.classList.contains("hidden"));
    //Set toast==>
    console.log(`IsAnyFieldEmpty==>${isAnyFieldEmpty} ,LableVisible=>${anyLabelVisible},SetCheckedState=>${!(isChecked)}`);
    // setErrorState((isAnyFieldEmpty || anyLabelVisible) ? showToast("⚠️ Check the form for Errors!", "toast-error") : showToast("✔️ Info collected thanks!", "toast-success"));
    setFinal(isAnyFieldEmpty && anyLabelVisible && isChecked);
  };
 


  //Default_Err_function==============>>>
  const default_Error_fn_en = (id_args, colormode) => {
    //colormode is the var in css that contains the color of the input box
    document.documentElement.style.setProperty(colormode, "red");
    document.getElementById(id_args).classList.remove("hidden"); //find the element by id and remove the classname from css
  };
  const default_Error_fn_di = (id, colormode1) => {
    document.documentElement.style.setProperty(colormode1, "#298aeb");
    document.getElementById(id).classList.add("hidden");
  };
  //Default_Err_function==============>>>

  const handlefnameChange = (newValue) => {
    setFname(newValue); //Simply Changig the State
    if (newValue.trim() === "") {
      default_Error_fn_en("hidden_fname", "--box_fname");
      setErrormsg("The field shouldn't be empty");
    } else if (!/^[a-zA-Z]+$/.test(newValue.replace(/\s/g, ""))) {
      default_Error_fn_en("hidden_fname", "--box_fname");
      setErrormsg("Only alphabets are allowed");
    } else {
      default_Error_fn_di("hidden_fname", "--box_fname"); //args(lableid,css var name)
      setErrormsg("");
    }
  };

  const handleUnameChange = (newValue) => {
    setUname(newValue); //Simply Changig the State
    if (newValue.trim() === "") {
      default_Error_fn_en("hidden_uname", "--box_uname");
      setErrormsg2("The field shouldn't be empty");
    } else {
      default_Error_fn_di("hidden_uname", "--box_uname"); //args(lableid,css var name)
      setErrormsg2("");
    }
  };

  const handleEmailChange = (newValue) => {
    setEmail(newValue); //Simply Changig the State
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (newValue.trim() === "") {
      default_Error_fn_en("hidden_email", "--box_email");
      setErrormsg3("Email is required");
    } else if (!re.test(String(newValue).toLowerCase())) {
      default_Error_fn_en("hidden_email", "--box_email");
      setErrormsg3("Provide a valid email address");
    } else {
      default_Error_fn_di("hidden_email", "--box_email"); //args(lableid,css var name)
      setErrormsg3("");
    }
  };
  const handleMobileChange = (newValue) => {
    setEmail(newValue); //Simply Changig the State
    if (newValue.trim() === "") {
      default_Error_fn_en("hidden_mobile", "--box_phone");
      setErrormsg4("The field shouldn't be empty");
    } else if (!/^\d+$/.test(newValue.replace(/\s/g, ""))) {
      default_Error_fn_en("hidden_mobile", "--box_phone");
      setErrormsg4("Only Numbers are allowed");
    } else if (newValue.length !== 10) {
      default_Error_fn_en("hidden_mobile", "--box_phone");
      setErrormsg4("Please enter a 10-digit number");
    } else {
      default_Error_fn_di("hidden_mobile", "--box_phone");
      setErrormsg4("");
    }
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="main_body">
      <div className="form_body left">
        <p id="quote">Discover new things on Superapp</p>
      </div>
      <div className="form_body right">
        <div className="subform one">
          <p className="mmo" id="logo">
            Super app
          </p>
          <p className="mmo">Create your new account</p>
        </div>

        <div className="subform two">
          <form id="form" action="">
            <div class="input-control">
              <input
                type="text"
                placeholder="Name"
                className="boxbox"
                id="name"
                value={fname}
                maxLength={20}
                onChange={(e) => {
                  setFname(e.target.value);
                  handlefnameChange(e.target.value);
                }}
              ></input>
              <div className="error">
                <label id="hidden_fname" class="Errormsg hidden">
                  Error : {errormsg}
                </label>
              </div>
            </div>

            <div class="input-control">
              <input
                type="text"
                placeholder="Username"
                className="boxbox"
                id="uname"
                value={uname}
                maxLength={20}
                onChange={(e) => {
                  setUname(e.target.value);
                  handleUnameChange(e.target.value);
                }}
              ></input>
              <div className="error">
                <label id="hidden_uname" class="Errormsg hidden">
                  Error : {errormsg2}
                </label>
              </div>
            </div>
            <div class="input-control">
              <input
                type="text"
                placeholder="Email"
                className="boxbox"
                id="email"
                value={email}
                maxLength={20}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleEmailChange(e.target.value);
                }}
              ></input>
              <div className="error">
                <label id="hidden_email" class="Errormsg hidden">
                  Error : {errormsg3}
                </label>
              </div>
            </div>
            <div class="input-control">
              <input
                type="text"
                placeholder="Mobile"
                className="boxbox"
                id="mobile"
                value={mobile}
                maxLength={20}
                onChange={(e) => {
                  setMobile(e.target.value);
                  handleMobileChange(e.target.value);
                }}
              ></input>
              <div className="error">
                <label id="hidden_mobile" class="Errormsg hidden">
                  Error : {errormsg4}
                </label>
              </div>
            </div>
            <div class="input-control check">
              <input type="checkbox" checked={isChecked}
        onChange={handleCheckboxChange}/>
              &emsp;Share my registration data with Superapp
              <div className="error"></div>
            </div>
            <div class="input-control">
              <button
                value="Submit"
                onClick={handlechecks}
                id="sub_button"
                type="submit"
                form="form"
              >
                Submit
              </button>
              <div className="error"></div>
            </div>
            <div class="input-control">
              <p>
                By clicking on Sign up. you agree to Superapp{" "}
                <span class="highlight">Terms and Conditions of Use</span>
              </p>
              <p>
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp{" "}
                <span class="highlight">Privacy Policy</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
