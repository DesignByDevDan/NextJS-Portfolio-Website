import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './MagicButton';

const Hero = () => {
  return (
    <div className="pb-10 pt-10">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-[90vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.0] bg-grid-black/[0.0] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="flex justify-center relative my-10 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Welcome to my portfolio
            </p>

            <TextGenerateEffect
              words="Turning Ideas into Effortless User Experiences"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Daniel, a Next.js Developer.
            </p>

            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
