import React from "react";
import "../style/Aboutme.scss";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import CakeIcon from "@mui/icons-material/Cake";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
const Aboutme = () => {
  return (
    <div class="Aboutme">
      <div class="Aboutme_div">
        <div class="Aboutmetitle">About Me</div>

        <div class="Aboutmeimg">
          <div class="imgas">
            <img
              class="imgas1"
              id="porfile-img"
              src="https://media.discordapp.net/attachments/1044869991683596290/1044879099925123082/a89b41880eb2d594.jpg?width=300&height=400"
            />
          </div>
          <div class="AboutmeMain">
            <div class="Aboutme1">
              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <PersonIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>이름</div>
                  <div>이용민</div>
                </div>
              </div>

              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <PhoneIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>생년월일</div>
                  <div>93.01.17</div>
                </div>
              </div>
              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <CakeIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>연락처</div>
                  <div>010-5682-5291</div>
                </div>
              </div>
            </div>

            <div class="Aboutme1">
              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <PlaceIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>주소지</div>
                  <div>대전</div>
                </div>
              </div>
              <div class="Aboutme1div">
                <span class="Aboutme1icon">
                  <ModeEditIcon fontSize="" color="disabled" />
                </span>
                <div>
                  <div>
                    <div>이메일</div>
                    <div>kimo930117@naver.com</div>
                  </div>
                </div>
              </div>
              <div class="Aboutme1div">
                <span class="Aboutme1icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
