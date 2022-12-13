import React from "react";
import "../style/Archiving.scss";

const Archiving = () => {
  return (
    <div class="Archiving">
      <div class="Archivingtitle">Archiving </div>
      <div class="Archivinglist">
        <div class="Archivinglist_div">
          <img src="https://i.postimg.cc/mknPtbtm/image.png" alt="" />

          <div>
            <a href="http://localhost:3000/">http://localhost:3000/</a>
          </div>

          <div>
            소스 코드 저장소 <span>입니다.</span>
          </div>
          <li>과거 프로젝트 , 현재 프로그랩 소스 코드</li>
          <li>혼자 연습한 소스 코드</li>
        </div>
        <div class="Archivinglist_div">
          <img src="https://i.postimg.cc/gcygfKBC/image.png" alt="" />
          <div>
            <a href="http://localhost:3000/">http://localhost:3000/</a>
          </div>

          <div>
            공부 및 지식 공유 목적의 블로그 <span>입니다.</span>
          </div>
          <li>웹 개발자의 길을 걸으며 공부한 관련 지식</li>
          <li>학원을 다니면서 정리한 지식</li>
          <li>필요한 소스 정이한 지식</li>
        </div>
      </div>
    </div>
  );
};

export default Archiving;
