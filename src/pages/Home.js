import React from "react";
import CameraCapture from "../components/CameraCapture";
import ImageUpload from "../components/ImageUpload";
import ResultCard from "../components/ResultCard";

function Home() {
  return (
    <div>
      <h1>NutriSnap – What's On My Plate?</h1>
      <p>Take a photo or upload your food image to get nutrition info.</p>
      
      <CameraCapture />
      <ImageUpload />
      <ResultCard />
    </div>
  );
}

export default Home;
