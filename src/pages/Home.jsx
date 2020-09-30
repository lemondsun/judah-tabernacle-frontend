import React from "react";

import HeroSection from "../components/home/HeroSection";
import HomeBottomSection from "../components/home/HomeBottomSection";
import HomeMainSection from "../components/home/HomeMainSection";

export default function Home() {
  return (
    <div class="container home-page">
      <HeroSection />
      <HomeMainSection />
      <HomeBottomSection />
    </div>
  );
}
