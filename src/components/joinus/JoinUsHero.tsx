import React from "react";
import HeroPlaceholder from "@/assets/joinus/hero_placeholder.jpg";
import Image from "next/image";

type StaticImageData = {
  src: string;
};

export const JoinUsHero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center py-8 md:px-4 text-center md:w-6/12">
        <h2 className="text-5xl font-bold text-primary">Join Our Team!</h2>
        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 mb-8 md:mb-0 text-2xl"
        >
          Get involved with UBC BIOMOD →
        </a>
      </div>
      <Image
        src={(HeroPlaceholder as StaticImageData).src}
        alt="UBC BIOMOD"
        width="0"
        height="0"
        className="h-auto w-full md:w-1/3 object-cover rounded-3xl"
      />
    </div>
  );
};

export default JoinUsHero;
