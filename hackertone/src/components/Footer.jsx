import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="#privacy">개인정보 처리방침</a></li>
          <li><a href="#email">이메일무단수집</a></li>
          <li><a href="#copyright">저작권정책</a></li>
          <li><a href="#openinfo">공공정보소식</a></li>
        </ul>
        <p>
          SSAFY | 주소: 광주캠퍼스 광주_2반 | 대표: 킹왕짱존잘김시원<br />
          COPYRIGHTⓒSSAFY All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
