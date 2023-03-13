import React from "react";
import t2 from "../assets/images/t1.jpeg";

/**
 *
 * @author Chetan_Nagmoti
 * This component renders Carousel
 */
function Corousal(props) {
  return (
    <div className="carousel-inner col-lg-17">
      <div className="carousel-item active">
        <img src={t2} width="100%" height="380" />
      </div>
    </div>
  );
}

export default Corousal;
