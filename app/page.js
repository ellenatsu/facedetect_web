"use client";

import Logo from "@/components/Logo";
import Rank from "@/components/Rank";
import Navigation from "@/components/Navigation";
import ParticlesBg from "@/components/ParticlesBg";
import FaceRecognition from "@/components/FaceRecognition";

export default function Home() {


  return (
    <>
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <FaceRecognition />
      </div>
      <ParticlesBg/>
    </>

 )
}
