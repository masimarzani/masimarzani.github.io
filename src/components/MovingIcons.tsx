"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const icons = [
  { src: "/images/figma.avif", tooltip: "Favorite" },
  { src: "/images/framer.avif", tooltip: "Love" },
  { src: "/images/framer.avif", tooltip: "Happy" },
  { src: "/images/figma.avif", tooltip: "Sunny" },
  { src: "/images/framer.avif", tooltip: "Night" },
  { src: "/images/framer.avif", tooltip: "Love" },
  { src: "/images/framer.avif", tooltip: "Happy" },
  { src: "/images/figma.avif", tooltip: "Sunny" },
  { src: "/images/framer.avif", tooltip: "Night" },
];

const MovingIcons = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    animate: {
      x: [`0%`, `-${(100 / icons.length) * icons.length}%`],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isHovered ? 60 : 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center my-10 md:mt-5 transition-all">
      <div
        className="overflow-hidden w-[300px] sm:w-[500px] md:w-[700px] xl:w-[1000px] md:mt-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <motion.div
          className="flex"
          variants={containerVariants}
          animate="animate"
          style={{ width: `${100 * (icons.length * 2)}px` }}
        >
          {[...icons, ...icons, ...icons, ...icons].map(
            ({ src, tooltip }, index) => (
              <div
                key={index}
                className="relative flex-shrink-0"
                style={{ width: `${50 / icons.length}%` }}
              >
                <img
                  src={src}
                  alt={tooltip}
                  className="w-6 h-6 object-contain"
                />
                {/* <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {tooltip}
                </div> */}
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MovingIcons;
