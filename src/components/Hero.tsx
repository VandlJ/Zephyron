"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center gap-8 perspective-1000">
      <div className="flex flex-col gap-6 max-w-[900px] items-center justify-center">
        <motion.h1
          className="text-6xl md:text-8xl font-din text-white flex flex-col"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div>
            <motion.span className="font-bold text-white" variants={item}>Robust</motion.span>
            <motion.span className="font-normal text-white" variants={item}> software</motion.span>
          </div>
          <div>
            <motion.span className="font-normal text-white" variants={item}>as a</motion.span>
            <motion.span className="font-bold text-white" variants={item}> standard</motion.span>
          </div>
        </motion.h1>
      </div>
      <div className="flex flex-row gap-4">
        <motion.button
          className="bg-gradient-to-r from-[#AA3206] to-[#FF6B35] px-5 py-2 text-lg rounded-md font-bold font-din"
          variants={item}
          initial="hidden"
          animate="show"
        >
          Checkout ClearWay
        </motion.button>
        <motion.button
          className="bg-gradient-to-r from-[#0F4C81] to-[#00B4D8] px-5 py-2 text-lg rounded-md font-bold font-din"
          variants={item}
          initial="hidden"
          animate="show"
        >
          Explore our Technology
        </motion.button>
      </div>
    </div>
  );
}
