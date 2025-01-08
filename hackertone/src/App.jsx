import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SpaceIntro from "./components/SpaceIntro";
import LocalSpaces from "./components/LocalSpaces";
import SnsSection from "./components/SnsSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

import "./App.css"; // 전체적인 공통 스타일

function App() {
  return (
    <div className="App">
      <NavBar />
        
      {/* 배너 섹션 */}
      <HeroSection />
      <SpaceIntro />
      <SnsSection />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default App;
