import React from "react";
import background from "../assets/images/planebg1.jpg";
import { Link } from "react-router-dom";

/**
 *
 * @author Chetan_Nagmoti
 * this component renders error page for wrong url
 */
function ForgotPassword(props) {
  return (
    <>
      <div className="container-fluid" style={styling.bg}>
      <h2 style={styling.er}>ForgotPassword</h2>
        <h1 style={styling.heading}>
          Already Your details has been send to your registered email Id{" "}
        </h1>
          <Link  to="/login">
            <button
              type="button" style={styling.link}
              className="btn mt-3  btn-link btn-block"
            >
             <h1>Already registered? Login Now!</h1> 
            </button>
          </Link>{" "}
        
        
       
      </div>
    </>
  );
}

let styling = {
  bg: {
    background: `url(${background}) no-repeat fixed center`,
    width: "100%",
    height: "100vh",
  },
  heading: {
    textAlign: "center",
    position: "relative",
    top: "20%",
    fontFamily: "fantasy",
    border: "2px #333333",
    color: "black",
    // fontSize:"100px"
  },
  link: {
    textAlign: "center",
    position: "relative",
    top: "20%",
    fontFamily: "fantasy",
    border: "2px #333333",
    color: "red",
    // fontSize:"100px"
  },

  er: {
    textAlign: "center",
    position: "relative",
    top: "20%",
    // fontFamily: "fantasy",
    border: "2px #333333",
    color: "black",
  },
};

export default ForgotPassword;
