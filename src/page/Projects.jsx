import React from "react";
import "../style/Projects.scss";

const Projects = () => {
  return (
    <div class="Projects">
      <div class="Projectstitle">Projects</div>
      <div>
        <div class="Projectslist">
          <div class="Projectslisttitle">
            <div>증시 / 코인 정보 자유게시판</div>
            <div>
              2022.10.03 ~ 2022.11.28 <span>(팀 프로젝트)</span>
            </div>
          </div>
          <div class="Projectslist1">
            <div class="slider">
              <input type="radio" name="slide" id="slide1" checked />
              <input type="radio" name="slide" id="slide2" checked />
              <input type="radio" name="slide" id="slide3" checked />
              <input type="radio" name="slide" id="slide4" checked />
              <input type="radio" name="slide" id="slide5" checked />

              <ul id="imgholder" class="imgs">
                <li>
                  <img src="https://i.postimg.cc/LsjGsgVw/1.png" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/cJmPp9NC/2.png" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/d0rG3p0Q/3.png" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/2jbLSg9s/4.png" />
                </li>
                <li>
                  <img src="https://i.postimg.cc/MGfJQbkp/5.png" />
                </li>
              </ul>
              <div class="bullets">
                <div>각 게시판 사진 </div>
                <label for="slide1">메인</label>
                <label for="slide2">게시판</label>
                <label for="slide3">상세페이지</label>
                <label for="slide4">검색</label>
                <label for="slide5">개인정보</label>
              </div>
            </div>

            <div class="Projectslist1_div">
              <div>
                코인과 증시 정보 공유 할 수 있게 도와주는 웹사이트 입니다.
              </div>
              <div>
                저는 투자 정보에 관심이 많았으며 저와 같이 투자에 관심이 있는
                사람들에게 도움이 되었으면 하는 마음으로 개발했습니다.
              </div>
              <div>
                <span>React</span> 를 이용하여 프론트를 제작 했으면 팀원들 간에
                부분 역활을 나누워 팀 프로젝트를 진행 하였습니다.최근에 인기가
                많은 <span>Tailwind CSS</span> 를 처음으로 사용해보며 이것의
                차별적인 유용성을 느낄 수 있었고, 동시에 <span>PostCSS</span> 가
                무엇인지 배우는 계기도 되었습니다.
              </div>
              <div>
                <span>Spring Boot</span> 를 이용하여 벡엔드를 이용하였고
                테이블은 <span>My SQL</span> 을 이용하여 데이터를 저정
                하였습니다 이를 통해 MySQL을 실제로 사용 할 수 있었다는 점에서
                더욱 의미가 있었습니다.
              </div>
              <div>
                전에는 프론트 작업만 팀프로젝트를 진행하였는데 이번엔 팀
                프로젝트로 구간을 나누워 진행을 하였고 그과정에{" "}
                <span>부족한 부분이 있었지만</span> 기본에 충실하게 프로젝트를
                진행 하었습니다.
              </div>

              <a href="http://www.noh.world:3000/" class="coin">
                <button>사이트 이동</button>
              </a>
              <a href="https://wiken.io/ken/11515" class="coin">
                <button>기술서 이동</button>
              </a>
              <hr />
              <table>
                <tbody>
                  <tr>
                    <td>주요 기능</td>
                    <td>
                      로그인,회원가입,검색기능,실시간 인기글,증시 전일 데이테
                      API,코인 현시간 데이터 API,상세페이지,각게시판,로그인시
                      글쓰기,수정,삭제, 로그인시 댓글쓰기,삭제,관리자 기능,목록
                      리스트화
                    </td>
                  </tr>

                  <tr>
                    <td>Frontend</td>
                    <td>React,Tailwind,dasiy,Material-ul,Visual Studio Code</td>
                  </tr>
                  <tr>
                    <td>Backend</td>
                    <td>Spring Boot,IntelliJ, Postman</td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td>My SQL</td>
                  </tr>
                  <tr>
                    <td>Deployment</td>
                    <td>AWS </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div class="Projectslist">
        <div class="Projectslisttitle">
          <div>포트폴리오 </div>
          <div>
            2022.11.20 ~ 2022.11.28 <span>(개인 프로젝트)</span>
          </div>
        </div>
        <div class="Projectslist1">
          <div class="slider1">
            <img src="https://i.postimg.cc/XvCmrKPQ/image.png" />
          </div>

          <div class="Projectslist1_div">
            <div>
              포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이
              웹사이트에 해당합니다.
            </div>

            <div>
              이미 순수 React로 개발을 완료한 프로젝트였지만, React의 학습을
              위해 이를 개발하였습니다. 레이아웃의 개념과 코드를 정리 할 수있는
              기회가 되었습니다. 이후 다른 작업시 쉽게 이해는 계기가 되었습니다.
            </div>

            <a
              href="https://github.com/Leehg5/portfolio-PersonalProject-"
              class="coin"
            >
              <button>깃허브 이동</button>
            </a>
            <hr />
            <table>
              <tbody>
                <tr>
                  <td>주요 기능</td>
                  <td>
                    간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 카카오 Tv
                    링크, 프로젝트 경험, 학원 수업
                  </td>
                </tr>

                <tr>
                  <td>Frontend</td>
                  <td>React,Tailwind,dasiy,Material-ul,Visual Studio Code</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Projects;
