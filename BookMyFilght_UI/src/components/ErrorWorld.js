import React from 'react';
import background from '../assets/images/planebg1.jpg';

/**
 * 
 * @author Chetan_Nagmoti
 * this component renders error page for wrong url
 */
function ErrorWorld(props) {
    return (
        <div className="container-fluid" style={styling.bg}>
           <h2 style={styling.er}>
            "We're sorry, but the website you are trying to reach is currently unavailable. We apologize for any inconvenience this may cause. Our team is working to resolve the issue as quickly as possible. Please try again later or contact us if you continue to experience problems accessing the site. 
      
            </h2>
            <h1 style={styling.heading}>Thank you for your patience and understanding."</h1>
        </div>
    );
}

let styling = {
    bg : {
        background : `url(${background}) no-repeat fixed center`,
        width : "100%",
        height : '100vh'
    },
     heading : {
        textAlign: "center",
        position: "relative",
        top: "35%",
        fontFamily: "fantasy",
        border: "2px #333333",
        color: "red",
        // fontSize:"100px"
    },

    er:{
        textAlign: "center",
        position: "relative",
        top: "15%",
        // fontFamily: "fantasy",
        border: "2px #333333",
        color:"black"
    }
}

export default ErrorWorld;