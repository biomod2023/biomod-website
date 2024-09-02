import Image from "next/image";
import Link from "next/link";
import applyImg from "./apply_photo.jpg";
import { useState } from "react";
import dots from "@/assets/dots.png";

export default function ReadyToApply() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(true);
  return (
    <div
      className="flex flex-col lg:flex-row gap-x-[7rem] items-center gap-y-4"
      id="apply-now"
    >
      <Image
        src={dots}
        alt="Background"
        className="absolute right-4 w-1/2 -z-10"
      />
      <Image
        src={applyImg}
        alt="Image of our team!!"
        className="lg:w-[60%] rounded-xl"
      />
      {!isApplicationOpen ? (
        <div className="relative flex flex-col items-center basis-1/2 gap-y-4 lg:gap-y-10 text-center">
          <h1
            className="text-headingRegMob text-primary font-semibold
                    lg:text-headingReg"
          >
            Ready to apply?
          </h1>
          <p>
            Applications are currently closed, but keep an eye out! We accept
            new members every term, so follow our Instagram to get the latest
            news!
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center basis-1/2 gap-y-4 lg:gap-y-10 text-center">
          <h1
            className="text-headingRegMob text-primary font-semibold
                    lg:text-headingReg"
          >
            Apply now!
          </h1>
          <p>Applications are currently open until September 8th, 2024.</p>
          <div className="flex gap-4">
            <Link
              href="https://ubc.ca1.qualtrics.com/jfe/form/SV_ac1Mta7AsMIC8E6"
              target="_blank"
              className="btn btn--primary"
            >
              Apply
            </Link>
            <Link
              href="https://docs.google.com/document/d/1nX-95_pIUdS7edQGwJ7--fzF6pXmpVuvTWSW2ii9Vfs/edit"
              target="_blank"
              className="btn btn--accent"
            >
              Hiring Package
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
