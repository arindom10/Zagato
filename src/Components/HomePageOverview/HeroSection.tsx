"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../Images/LOGO.png";

const HeroSection = () => {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <div className="relative w-full h-screen flex flex-col">
      <nav className="absolute top-0 left-0 w-full flex justify-center p-6 z-10">
        <ul className="flex space-x-8 text-white uppercase text-sm font-medium">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Explore Us</li>
          <li className="cursor-pointer hover:underline">Our Products</li>
          <li className="cursor-pointer hover:underline">Our Services</li>
          <li className="cursor-pointer hover:underline">Product Showcase</li>
          <li className="cursor-pointer hover:underline">Contact Us</li>
        </ul>
      </nav>

      <div className="relative w-full h-full flex overflow-hidden">
        <motion.div
          className="w-1/2 h-full bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/YBYq0cDB/Frame-53.webp')`,
          }}
          animate={{ scale: hovered === "left" ? 1.1 : 1 }}
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[-90deg] text-white text-lg font-semibold tracking-wide">
            EXPLORE US
          </div>
        </motion.div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            className=" flex items-center justify-center  rounded-full shadow-lg"
            animate={{
              rotate: hovered === "left" ? -90 : hovered === "right" ? 90 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              style={{ height: "250px !important", width: "250px !important" }}
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </motion.div>
        </div>

        <motion.div
          className="w-1/2 h-full bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/38JC1nc/Frame-54.webp')`,
          }}
          animate={{ scale: hovered === "right" ? 1.1 : 1 }}
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-[90deg] text-white text-lg font-semibold tracking-wide">
            PARTNERS
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6 text-white text-lg">
        <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
        <FaInstagram className="cursor-pointer hover:scale-110 transition" />
        <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
      </div>
    </div>
  );
};

export default HeroSection;
