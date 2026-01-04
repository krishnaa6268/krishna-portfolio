// src/components/Landing/HeroSection/index.tsx
import React, { useRef } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  // SiHtml5,
  // SiTailwindcss,
  // SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
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
const primaryStack = [
  {
    id: "react",
    Icon: SiReact,
    color: "text-sky-400",
  },
  {
    id: "typescript",
    Icon: SiTypescript,
    color: "text-cyan-400",
  },
  {
    id: "node",
    Icon: SiNodedotjs,
    color: "text-green-700",
  },
  {
    id: "express",
    Icon: SiExpress,
    color: "text-white",
  },
  {
    id: "mysql",
    Icon: GrMysql,
    color: "text-blue-400",
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
      "UI Builder.",
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
    <section
      className="relative pt-8 pb-15 px-5 md:px-6 overflow-hidden bg-gray-950 "
      id="home"
    >
      <img
        src="/images/stars.png"
        className="w-full h-full absolute top-0 left-0 object-fill pointer-events-none"
      />
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex lg:hidden mx-auto justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Ambient Glow */}
            <motion.div
              animate={{ opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-linear-to-br from-blue-900/60 via-indigo-800/40 to-slate-900/60 blur-3xl scale-110"
            />

            {/* Floating avatar wrapper */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-full p-[2px] bg-linear-to-br from-red-900 via-indigo-800 to-slate-900 shadow-2xl"
            >
              <div className="relative rounded-full p-[4px] bg-slate-950 overflow-visible">
                {/* Avatar wrapper (clipped) */}
                <motion.div
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  className="relative h-35 w-35 rounded-full overflow-hidden bg-black z-10"
                >
                  <img
                    src={HERO_IMAGE_SRC}
                    alt="Krishna Kumar Gupta"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="
      absolute -right-[48%] top-[10%] z-20
      rounded-full bg-emerald-700
      px-3 py-1 text-xs font-medium text-white
      shadow-lg cursor-pointer
      whitespace-nowrap
    "
                >
                  Software Engineer
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.45, type: "spring", stiffness: 200 }}
                  className="
      absolute -left-[48%] bottom-[10%] z-20
      rounded-full bg-amber-500
      px-3 py-1 text-xs font-medium text-black
      shadow-lg cursor-pointer
      whitespace-nowrap
    "
                >
                  MERN • TypeScript
                </motion.div>
              </div>
            </motion.div>

            {/* 🟢 Online indicator */}
            <span className="absolute bottom-2 right-5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900 animate-pulse" />
          </motion.div>
        </motion.div>

        {/* LEFT: Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 lg:gap-6"
        >
          <h4 className="text-sm sm:text-lg text-center lg:text-left font-light tracking-widest text-neutral-400">
            WELCOME TO MY CUBE
          </h4>

          <h1 className="text-white text-[28px] sm:text-3xl md:text-5xl xl:text-6xl sm:text-center lg:text-left font-extrabold leading-tight font-lora italic">
            Hey, I&apos;m{" "}
            <span className="bg-[#ff014f] text-transparent bg-clip-text">
              Krishna <span className="hidden md:inline">K.</span> Gupta
            </span>
          </h1>

          <h2 className="text-white text-[18px] sm:text-2xl md:text-3xl xl:text-4xl font-semibold flex items-center gap-2">
            <span>{text}</span>
            <Cursor
              cursorBlinking={false}
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>

          <p className="text-[14px] md:text-[18px] leading-relaxed lg:max-w-xl text-neutral-300">
            I’m a Software Developer who enjoys building simple, fast, and
            modern websites that feel good to use. I focus on clean design,
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
            className="max-w-[238px] sm:max-w-[272px] inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-xs sm:text-[0.9rem] text-slate-300 shadow-[0_0_30px_rgba(15,23,42,0.7)] text-center"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for freelance & remote work</span>
          </Link>

          <motion.div
            variants={itemFadeUp}
            initial="hidden"
            animate="show"
            className="pt-4 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center"
          >
            {/* Social icons */}
            <div>
              <p className="text-sm md:text-[16px] lg:text-lg tracking-widest text-neutral-400 mb-3">
                FIND ME IN
              </p>

              <div className="flex gap-2.5">
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
              <p className="text-sm md:text-[16px] lg:text-lg text-neutral-400 mb-3">
                PRIMARY STACK
              </p>
              <div className="flex gap-2.5">
                {primaryStack.map(({ id, Icon, color }) => (
                  <motion.div
                    key={id}
                    whileHover={{ y: -6 }}
                    className="p-3 rounded-lg bg-neutral-900 border border-white/5 shadow-md flex items-center justify-center"
                  >
                    <Icon className={`text-xl ${color}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image with modern background */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hidden lg:block max-w-md cursor-pointer perspective-distant lg:mt-15 lg:mr-6 lg:ml-6"
        >
          <div className="relative">
            {/* Ambient floating glow */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-amber-400/30 blur-3xl"
            />

            {/* Animated dotted field */}
            <motion.div
              ref={dotsRef}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -left-8 -top-8 h-32 w-32 grid grid-cols-6 grid-rows-6 gap-1 opacity-60"
            >
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className="h-[5px] w-[5px] rounded-full bg-neutral-400"
                />
              ))}
            </motion.div>

            {/* Glass depth card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-6 h-60 w-60 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            />

            {/* Accent block */}
            <div
              ref={yellowRef}
              className="absolute -bottom-5 -left-5 h-64 w-64 bg-[#be1b4c] rounded-2xl"
            />

            {/* Main image */}
            <div
              ref={imageRef}
              className="relative z-10 overflow-hidden rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] bg-black aspect-4/5 transform-style-preserve-3d"
            >
              <img
                src={HERO_IMAGE_SRC}
                alt="Krishna Kumar Gupta"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          </div>

          {/* Mobile only – Enhanced */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
