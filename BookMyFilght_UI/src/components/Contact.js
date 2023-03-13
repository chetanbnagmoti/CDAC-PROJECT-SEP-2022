import React, { Component } from "react";
import ChetanInfo from "./ChetanInfo";
import ChetanInfoRight from "./ChetanInfoRight";
import Footer from "./Footer";
import Header from "./Header";



/**
 * @author Chetan_Nagmoti
 * this component renders home page for admin
 */
class Contact extends Component {
  render() {
    return (
      <div >
        <div>
          <Header />
        </div>

        <div class="container-fluid border mb-5 bg-light">
          <div class="container bg-white mt-5">
            <div class="row">
              <div class="col">
                <div class="p-5">
                  <div>
                    
                    <ChetanInfo
                      name="Bhavesh Gupta"
                      email="bhaveshgupta027@gamil.com"
                      photo="https://avatars.githubusercontent.com/u/119398229?v=4"
                      mobile="7021787578"
                      gitHub="https://github.com/bhaveshgupta0"
                      dese="Software Developer"
                    />
                    <ChetanInfoRight
                      name="Chetan Nagmoti "
                      email="chetanbnagmoti@gmail.com"
                      photo="https://avatars.githubusercontent.com/u/119286565?v=4"
                      mobile="8390569860"
                      gitHub="https://github.com/chetanbnagmoti"
                      dese="Software Developer"
                    />
                    <ChetanInfo
                      name="Sudeep Suryawanshi"
                      email="suryawanshisudeep97@gmail.com"
                      photo="https://avatars.githubusercontent.com/u/119395292?s=400&u=d99c219a4900528ae534359d2e04386d1593d21e&v=4"
                      mobile="8408920708"
                      gitHub="https://github.com/sudeep2610"
                      dese="Software Developer"
                    />
                    <ChetanInfoRight
                      name="Mayuresh Sanjay Kate"
                      email="katemayuresh53@gmail.com"
                      photo="https://media.licdn.com/dms/image/C4E03AQEJL_zx9rHyZw/profile-displayphoto-shrink_200_200/0/1648648371109?e=1683763200&v=beta&t=5XEYGjEMbYw_EKNdRMM7ECwfUIgwISFB7Icx9gARD8M"
                      mobile="8329930383"
                      gitHub="https://github.com/KateMayuresh"
                      dese="Software Developer"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="container bg-white"></div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
