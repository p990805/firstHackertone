import React from "react";
import "./NewsSection.css";

function NewsSection() {
  return (
    <section className="news-section">
      <h2>새로운 소식</h2>
      <div className="news-cards">
        <div className="news-card">
          <h3>공지</h3>
          <h4>SSAFY생들의 질문 프로젝트 '예컨대'</h4>
          <p>2025.01.08</p>
        </div>
        <div className="news-card">
          <h3>공지</h3>
          <h4>&lt;또 다른 언어로!  프로그래밍 언어 Java&gt; 광주_2반과 함께...</h4>
          <p>2025.01.08</p>
        </div>
        <div className="news-card">
          <h3>공지</h3>
          <h4>2025 광주캠퍼스 광주_2반 '지금, 모두가 시작하는 곳…'</h4>
          <p>2025.01.08</p>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
