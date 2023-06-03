import React from 'react';
import { useRef } from 'react';
import './join.css';
const Join = () => {
  const form: any = useRef();
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email Address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
