import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div id="f" class="Navbar">
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
                <div>
                  Next.js, React, Spring Boot 기반의 풀스택 개발자 입니다.
                </div>
                <div>
                  개바 분야의 동료들과 원만한 커뮤니케이션 스킬로 팀원과의
                  소통능력
                </div>
                <div>효율적으로 업무를 추진하는 스타일 입니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
