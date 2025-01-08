import React from "react";
import "./SnsSection.css";

function SnsSection() {
  return (
    <section className="sns-section">
      <h2>Retireach SNS</h2>
      <p>Retireach 공식 채널을 보고 다양한 소식을 만나세요.</p>
      <div className="sns-cards">
        {/* 아래는 예시로 유튜브 썸네일/이미지를 대신 */}
        <div className="sns-card">
          <img src="/images/sns_thumbnail1.jpg" alt="SNS 썸네일" />
          <p>영상1: LG 임원 출신 60대 주식 이야기</p>
        </div>
        <div className="sns-card">
          <img src="/images/sns_thumbnail2.jpg" alt="SNS 썸네일" />
          <p>영상2: 노후직업으로 건물주</p>
        </div>
        <div className="sns-card">
          <img src="/images/sns_thumbnail3.jpg" alt="SNS 썸네일" />
          <p>영상3: 손자,손녀 지치게 하는 법</p>
        </div>
        <div className="more-button-container">
          <button className="more-button">MORE</button>
        </div>
      </div>
    </section>
  );
}

export default SnsSection;
