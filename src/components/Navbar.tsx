"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  
  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div className="flex items-center" variants={item}>
          <Image
            src="/logo-no-bg.png"
            alt="Zephyron Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-2xl md:text-3xl font-bold font-din">ZEPHYRON</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="items-center hidden md:flex space-x-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {navItems.map((item) => {
            const lowerItem = item.toLowerCase();
            return (
              <motion.a
                key={item}
                href={`#${lowerItem}`}
                onClick={() => setActiveLink(lowerItem)}
                className={`text-lg md:text-xl text-white${activeLink === lowerItem ? '' : '/80'} hover:text-white transition-colors font-din`}
                variants={container}
              >
                <span className={activeLink === lowerItem ? "font-bold" : "font-normal"}>
                  {item}
                </span>
              </motion.a>
            );
          })}
          <motion.button 
            className="bg-gradient-to-r from-[#0F4C81] to-[#00B4D8] px-5 py-2 text-lg rounded-md font-bold font-din"
            variants={item}
          >
            Book Consultation
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
