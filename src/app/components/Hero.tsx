import React from "react";
import { BackgroundLinesDemo } from "./BackgroundLines";
import { SparklesPreview } from "./Sparkles";

const Hero = () => {
  return (
    <div className="w-full mt-45 mb-16 rounded-full">
      <BackgroundLinesDemo />
      <SparklesPreview />
    </div>
  );
};

export default Hero;
