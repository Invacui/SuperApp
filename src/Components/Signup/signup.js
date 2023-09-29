import React from "react";
import "./signup.css";
const Signup = () => {
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
          <form>
            <div class="input-control">
              <input type="text" placeholder="Name"></input>
              <div className="error"></div>
            </div>
            <div class="input-control">
              <input type="text" placeholder="Username"></input>
              <div className="error"></div>
            </div>
            <div class="input-control">
              <input type="text" placeholder="Email"></input>
              <div className="error"></div>
            </div>
            <div class="input-control">
              <input type="text" placeholder="Mobile"></input>
              <div className="error"></div>
            </div>
            <div class="input-control check">
              <input type="checkbox" />&emsp;Share my registration data with Superapp
              <div className="error"></div>
            </div>
            <div class="input-control">
              <button>Submit</button>
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
