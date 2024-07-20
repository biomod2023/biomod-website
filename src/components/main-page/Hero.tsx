import CellImage from "@/assets/cell.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import dots from "@/assets/dots.png";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 lg:gap-10 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
        <Image
          className="lg:w-1/2"
          src={CellImage}
          alt="Hand-drawn Image of Cell"
        />
        <div
          className="relative flex flex-col items-center lg:basis-1/2 gap-8
                    lg:items-start lg:gap-8"
        >
          <Image
            className="absolute -z-10 xl:-top-4"
            src={dots}
            alt="Background Dots"
          />
          <h1
            className="text-primary text-7xl text-center font-bold
                        lg:text-8xl xl:text-9xl lg:text-left"
          >
            UBC BIOMOD
          </h1>
          <h2
            className="text-center text-subHeadingRegMob
                        lg:text-subHeadingReg lg:text-left"
          >
            UBC&apos;s Premiere Biomolecular Design Club
          </h2>
          <Link href="/about" className="btn btn--accent">
            Discover
          </Link>
        </div>
      </div>

      <Statistics />
    </div>
  );
}

function Statistics() {
  return (
    <div
      className="flex flex-col justify-center items-center
            gap-y-[1.5rem]
            md:flex-row md:gap-x-[5rem] lg:gap-x-[8rem]"
    >
      <Number num={12} description="years running" />
      <Number num={10} description="projects made" />
      <Number num={6} description="first place wins" />
    </div>
  );
}

function Number(props: { num: number; description: string }) {
  const [currNum, setCurrNum] = useState(0);
  const currNumRef = useRef(0);
  const increaseCount = async () => {
    await new Promise((r) => setTimeout(r, 4));
    if (currNumRef.current == props.num) return;

    currNumRef.current += 1;
    setCurrNum(currNumRef.current);
  };
  return (
    <div className="flex flex-col text-center">
      <div className="relative flex flex-row justify-center">
        <AnimatePresence>
          <motion.span
            key={"description" + currNumRef.current}
            className="text-primary text-[6rem] absolute z-0"
            initial={{ opacity: 0, position: "absolute", top: "-100px" }}
            animate={{ opacity: 1, position: "relative", top: "0px" }}
            exit={{ opacity: 0, position: "absolute", top: "100px" }}
            transition={{ ease: "circInOut", duration: 0.4 }}
            onAnimationComplete={increaseCount}
          >
            {currNum}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className="text-subHeadingRegMob z-10
                md:text-subHeadingReg"
      >
        {props.description}
      </span>
    </div>
  );
}
