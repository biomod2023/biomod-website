"use client";
import Hero from "@/components/about-us/Hero";
import Team from "@/components/about-us/Team";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center gap-y-defaultMob lg:gap-y-default bg-bg2 bg-no-repeat">
      <Hero />
      <Team />
    </div>
  );
}
