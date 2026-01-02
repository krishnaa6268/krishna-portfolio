// src/components/Landing/HeroSection/index.tsx
import React, { useRef } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ImBlog } from "react-icons/im";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../../utills/header.utils";

const HERO_IMAGE_SRC = "/images/k-black.png"; // <- update to your path

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/krishnaa6268",
    label: "LinkedIn",
    tooltip: "Connect on LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/krishnaa6268",
    label: "GitHub",
    tooltip: "View my work",
  },
  {
    icon: ImBlog,
    href: "/blogs",
    label: "My Blogs",
    tooltip: "Read my blogs",
  },
];

const itemFadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const HeroSection: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer.",
      "Curious Learner.",
      "Builder.",
      "Tech Volunteer.",
      "Freelancer.",
    ],
    loop: true,
    typeSpeed: 45,
    deleteSpeed: 25,
    delaySpeed: 1500,
  });

  const imageRef = useRef<HTMLDivElement | null>(null);
  const yellowRef = useRef<HTMLDivElement | null>(null);
  const blackRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      scale: 1.05,
      y: -10,
      duration: 0.4,
      ease: "power3.out",
    });
    if (yellowRef.current)
      gsap.to(yellowRef.current, {
        y: -14,
        x: 12,
        duration: 0.4,
        ease: "power3.out",
      });
    if (blackRef.current)
      gsap.to(blackRef.current, {
        y: 10,
        x: -10,
        duration: 0.4,
        ease: "power3.out",
      });
    if (dotsRef.current)
      gsap.to(dotsRef.current, { y: -6, duration: 0.4, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(
      [imageRef.current, yellowRef.current, blackRef.current, dotsRef.current],
      {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      }
    );
  };

  return (
    <div className="relative pb-28 pt-10 lg:py-30 px-6 overflow-hidden bg-gray-950 " id="home">
      <img
        src="/images/stars.png"
        className="w-full h-full absolute top-0  left-0 object-fill pointer-events-none"
      />
      {/* gradient top line */}
      {/* <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-amber-400 via-pink-500 to-purple-500" /> */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ">
        {/* LEFT: Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h4 className="text-lg font-light tracking-widest text-neutral-400">
            WELCOME TO MY CUBE
          </h4>

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight font-lora italic">
            Hey, I&apos;m{" "}
            <span className="bg-[#ff014f] text-transparent bg-clip-text">
              Krishna <span className="hidden md:inline">K.</span> Gupta
            </span>
          </h1>

          <h2 className="text-3xl sm:text-4xl font-semibold flex items-center gap-2">
            <span>{text}</span>
            <Cursor
              cursorBlinking={false}
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>

          <p className="text-base text-[18px] leading-relaxed max-w-xl text-neutral-300">
            I’m a Frontend Software Developer who enjoys building simple, fast,
            and modern websites that feel good to use. I focus on clean design,
            smooth interactions, and creating experiences that make sense to
            real people. <br /> <br />
            <span className="hover:text-[#327b97]">
              Alongside my role, I also work on freelance projects, helping
              individuals and organizations turn ideas into practical,
              user-friendly web products.
            </span>
          </p>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="w-[95%] lg:w-[40%] inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-xs sm:text-[0.9rem] text-slate-300 shadow-[0_0_30px_rgba(15,23,42,0.7)]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for freelance & remote work</span>
          </Link>

          <motion.div
            variants={itemFadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
          >
            {/* Social icons */}
            <div>
              <p className="text-sm tracking-widest text-neutral-400 mb-3">
                FIND ME IN
              </p>

              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, tooltip }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -6, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="
          group relative
          block rounded-xl bg-neutral-900 p-3
          border border-white/5 shadow-md
          hover:border-white/20 transition
        "
                    aria-label={label}
                  >
                    {/* Icon */}
                    <Icon className="text-xl text-neutral-200" />

                    {/* Tooltip */}
                    <span
                      className="
            pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
            whitespace-nowrap rounded-md bg-black/80
            px-3 py-1 text-xs text-white
            opacity-0 scale-95 transition
            group-hover:opacity-100 group-hover:scale-100
          "
                    >
                      {tooltip}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-lg text-neutral-400 mb-3">PRIMARY STACK</p>
              <div className="flex gap-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-3 rounded-lg bg-neutral-900 border border-white/5 shadow-md flex items-center justify-center"
                >
                  <SiHtml5 className="text-xl text-orange-500" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-3 rounded-lg bg-neutral-900 border border-white/5 shadow-md flex items-center justify-center"
                >
                  <SiTailwindcss className="text-xl text-cyan-500" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-3 rounded-lg bg-neutral-900 border border-white/5 shadow-md flex items-center justify-center"
                >
                  <SiJavascript className="text-xl text-yellow-400" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-3 rounded-lg bg-neutral-900 border border-white/5 shadow-md flex items-center justify-center"
                >
                  <SiReact className="text-xl text-sky-400" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-3 rounded-lg bg-neutral-900 border border-white/5 shadow-md flex items-center justify-center"
                >
                  <SiTypescript className="text-xl text-cyan-400" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-3 rounded-lg bg-neutral-900 border border-white/5 shadow-md flex items-center justify-center"
                >
                  <SiNodedotjs className="text-xl text-green-700" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-3 rounded-lg bg-neutral-900 border border-white/5 shadow-md flex items-center justify-center"
                >
                  <GrMysql className="text-xl text-blue-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image with modern background */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-md lg:ml-auto cursor-pointer"
        >
          {/* Floating gradient blob */}
          <div className="absolute -left-6 -top-6 h-20 w-20 bg-yellow-600 blur-3xl rounded-full animate-pulse" />
          {/* Dotted background */}
          <div
            ref={dotsRef}
            className="absolute -left-8 -top-8 h-32 w-32 grid grid-cols-6 grid-rows-6 gap-1 opacity-60"
          >
            {Array.from({ length: 36 }).map((_, i) => (
              <span
                key={i}
                className="h-[5px] w-[5px] rounded-full bg-neutral-400"
              />
            ))}
          </div>
          {/* Neon ring */}
          <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full border-4 border-amber-400 blur-[2px] animate-spin-slow" />
          {/* Glass card behind image */}
          <div className="absolute -top-10 -right-6 h-60 w-60 rounded-3xl backdrop-blur-xl bg-white/10 shadow-[0px_8px_40px_rgba(0,0,0,0.45)] border border-white/20" />
          {/* Yellow block */}
          <div
            ref={yellowRef}
            className="absolute -bottom-4 -left-4 h-64 w-64 bg-[#be1b4c]"
          />
          {/* Main image card */}
          <div
            ref={imageRef}
            className="relative z-10 overflow-hidden rounded-2xl shadow-2xl bg-black aspect-4/5"
          >
            <img
              src={HERO_IMAGE_SRC}
              alt="Krishna Kumar Gupta"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
