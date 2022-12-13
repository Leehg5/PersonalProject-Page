import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div class="Navbar">
      <div class="Navbar-wrap">
        <div class="Navbar-image">
          <img src="https://i.postimg.cc/nLs1Z2gz/image.jpg" alt="" />
        </div>
        <div class="Navbar-text">
          <div class="Navbar-text-main">
            <Link to="a" spy={true} smooth={true}>
              <span>About Me</span>
            </Link>
            <Link to="b" spy={true} smooth={true}>
              <span>Skill</span>
            </Link>
            <Link to="c" spy={false} smooth={true}>
              <span>Archiving</span>
            </Link>
            <Link to="d" spy={true} smooth={true}>
              <span>Projects</span>
            </Link>
            <Link to="e" spy={true} smooth={true}>
              <span>Career</span>
            </Link>
          </div>
          <div class="Navbar-text-table">
            <div class="Navbar-text-table-row">
              <div class="Navbar-text-table-cell">
                <div> - 이용민 - </div>
                <div>웹 개발자 포토폴리오</div>

                <div>안녕하세요.</div>
                <div>공부가 취미인 풀 스택 웹 개발자입니다.</div>
                <div>
                  매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의
                  장점입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
