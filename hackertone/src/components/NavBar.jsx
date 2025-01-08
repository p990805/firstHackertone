import React from "react";
import "./NavBar.css"; // 별도 스타일 파일 사용 가정

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">Retireach</div>
      <ul className="nav-menu">
        <li><a href="#center">수업 찾기</a></li>
        <li><a href="#gyeonggi-lifeculture">강사 찾기</a></li>
        <li><a href="#archive">내 수업</a></li>
        <li><a href="#festival">행사</a></li>
        <li><a href="#community">소통</a></li>
      </ul>
      <div className="nav-login">
        <a href="#login">로그인</a> | <a href="#join">회원가입</a>
      </div>
    </nav>
  );
}

export default NavBar;
