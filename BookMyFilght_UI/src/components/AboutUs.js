import React from "react";
import Header from "./Header";

function AboutUs() {
  return (
    <React.Fragment>
       <Header/>
      <div class="container-fluid mt-5 pt-5">
        <div className="row">
  <div className="col  text text-center text-primary display-6 ">
  About Us
  </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-6 bg-primary ">
            <p1>
            An airline reservation system is a software application used by airlines to manage the entire booking process, from ticket sales to flight schedules, seat availability, and passenger information. The airline reservation system provides a convenient and efficient 
            way for travelers to book flights, choose their seats, and pay for their tickets online.

            </p1>
          </div>
          <div className="col-6 bg-info">
            <p1>
            One of the key benefits of using an airline reservation system is that it allows travelers to compare different flights and fares, enabling them to make informed decisions about their travel plans. This saves time and effort, as travelers can easily search for 
            flights and make bookings without having to physically visit a travel agent or airline office.
            </p1>
          </div>
          <br/>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-6 bg-info">
            <p1>
            An airline reservation system is a software application used by airlines to manage the entire booking process, from ticket sales to flight schedules, seat availability, and passenger information. The airline reservation system provides a convenient and efficient 
            way for travelers to book flights, choose their seats, and pay for their tickets online.

            </p1>
          </div>
          <div className="col-6 bg-primary">
            <p1>
            One of the key benefits of using an airline reservation system is that it allows travelers to compare different flights and fares, enabling them to make informed decisions about their travel plans. This saves time and effort, as travelers can easily search for 
            flights and make bookings without having to physically visit a travel agent or airline office.
            </p1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default AboutUs;
