import React from "react";
import { AnimatedPinDemo } from "./components/3dPin";
import { FloatingNavDemo } from "./components/Navbar";

import { TextGenerateEffectDemo } from "./components/TextGenerate";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCards";
import { AnimatedTooltipPreview } from "./components/AnimatedToolTip";
import { StatefulButtonDemo } from "./components/Contact";
import { GridBackgroundDemo } from "./components/BackGroundDots";
import { SpotlightPreview } from "./components/Spotlight";

const page = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center w-full min-h-screen bg-black bg-gradient-radial from-neutral-900 via-black to-neutral-900 overflow-auto pt-20 pb-36 overflow-x-hidden">
        {/* NAVBAR */}
        <div className="hidden md:w-full">
          <FloatingNavDemo />
        </div>
        {/* HERO SECTION */}
        <GridBackgroundDemo />
        <SpotlightPreview />
        {/* PROJECTS SECTION */}
        <div className="text-center  md:border-t-2 rounded-2xl">
          <TextGenerateEffectDemo text="PROJECTS" />
          <div id="projects" className="grid md:grid-cols-3 gap-3 ">
            <AnimatedPinDemo
              source="/Screenshot 2025-07-05 103147.png"
              title="AI Trainer"
              link="https://ai-trainer-flame.vercel.app/"
            />
            <AnimatedPinDemo
              source="image.png"
              title="RealTime CHAT APP"
              link="https://intern-project-rprx.onrender.com/"
            />
            <AnimatedPinDemo
              source="Screenshot 2025-07-10 065438.png"
              title="Online Learning Platform"
              link="https://www.linkedin.com/posts/krishna-prasad-s-59133a280_webdevelopment-fullstackdevelopment-nextjs-activity-7348744514083176449-h7W8?utm_source=share&utm_medium=member_android&rcm=ACoAAERknb0BJMfJ9csYef4RWZcXFcnIXtjHj0s"
            />
            <AnimatedPinDemo
              source="Screenshot 2025-07-07 061646.png"
              title="STUDENTS ACHIEVEMENT TRACKER"
              link="http://streak.infy.uk/"
            />
            <AnimatedPinDemo
              source="Screenshot 2025-07-07 061811.png"
              title="AUTOMATIC Portfolio Generator"
              link="https://www.linkedin.com/posts/krishna-prasad-s-59133a280_webdevelopment-frontenddevelopment-portfoliowebsite-activity-7316082002170978304-J3kA?utm_source=share&utm_medium=member_android&rcm=ACoAAERknb0BJMfJ9csYef4RWZcXFcnIXtjHj0s"
            />

            <AnimatedPinDemo
              source="Screenshot 2025-07-07 071635.png"
              title="Aceternity Portfolio"
              link="https://modern-uiux-ysbp.vercel.app/"
            />
            <AnimatedPinDemo
              source="Screenshot 2025-05-21 193848.png"
              title="PERSONAL PORTFOLIO"
              link="https://krishna-prasad-ceo.github.io/Portfolio.github.io/"
            />
          </div>
        </div>
        {/* ABOUT */}

        {/* EXPERIANCE */}
        <div>
          <InfiniteMovingCardsDemo />
        </div>
        {/* SKILLS */}
        <div className="mb-10 mt-20 flex justify-center items-center flex-col">
          <TextGenerateEffectDemo text="SKILLS" />
          <AnimatedTooltipPreview />
        </div>
        {/* Footer */}
        <div id="contact">
          <StatefulButtonDemo />
        </div>
      </section>
    </div>
  );
};

export default page;
