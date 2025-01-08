import React from "react";
import "./SpaceIntro.css";

function SpaceIntro() {
  return (
    <section className="space-intro-section" id="center">
      <div className="text-container">
        <h2>Retireach 카테고리</h2>
        <p>다양한 주제를 탐구하며 새로운 기회를 발견하세요!</p>
      </div>
      <div className="content-container">
        <div className="tags-container">
          <button>주식</button>
          <button>부동산</button>
          <button>골프</button>
          <button>영업</button>
          <button>창업</button>
          <button>it</button>
          <button>예술</button>
          <button>스포츠</button>
          <button>사진</button>
          <button>편집</button>
          <button>음악</button>
          <button>생활</button>
        </div>
        <div className="space-image">
          <img src="/images/space_example.jpg" alt="강의의 예시?" />
        </div>
      </div>
    </section>
  );
}

export default SpaceIntro;
