import { useEffect } from "react";
import gsap from "gsap";
import { TbBrandGithub, TbBrandLinkedin, TbArrowRight } from "react-icons/tb";
import "./../../../index.css";
import "aos/dist/aos.css";

export default function PortfolioHero() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 60, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
    )
      .fromTo(
        ".hero-sub",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-0.6"
      )
      .fromTo(
        ".hero-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-0.4"
      )
      .fromTo(
        ".hero-buttons",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-0.4"
      )
      .fromTo(
        ".hero-socials",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-0.5"
      );

    // === FLUID CURSOR ===
    const cursor = document.getElementById("cursor")!;
    const glow = document.getElementById("cursor-glow")!;

    window.addEventListener("mousemove", (e) => {
      // Main fast cursor
      gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.1,
        ease: "power3.out",
      });

      // Glow delayed
      gsap.to(glow, {
        x: e.clientX - 70,
        y: e.clientY - 70,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    // Hover scaling
    const hoverables = document.querySelectorAll(".cursor-hover");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 1.8 });
        gsap.to(glow, { scale: 1.4, opacity: 0.5 });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1 });
        gsap.to(glow, { scale: 1, opacity: 0.3 });
      });
    });

    // === PARALLAX BLOBS ===
    window.addEventListener("mousemove", (e) => {
      gsap.to(".blob", {
        x: e.clientX * 0.02,
        y: e.clientY * 0.02,
        duration: 1,
        ease: "power1.out",
      });
    });

    // === ANIMATED GRID ===
    gsap.to(".grid-bg", {
      backgroundPosition: "140px 140px",
      duration: 1.5,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center 
    bg-[#060606] text-white relative overflow-hidden px-4 sm:px-6 font-assistant"
    >
      {/* MAIN FLUID CURSOR */}
      <div
        id="cursor"
        className="fixed top-0 left-0 pointer-events-none z-9999
    w-6 h-6 sm:w-10 sm:h-10 rounded-full mix-blend-difference backdrop-blur-xl"
      ></div>

      {/* TRAIL / GLOW */}
      <div
        id="cursor-glow"
        className="fixed top-0 left-0 pointer-events-none z-9998
    w-20 h-20 sm:w-30 sm:h-30 rounded-full blur-2xl sm:blur-3xl opacity-30"
      ></div>

      {/* GRID BACKGROUND */}
      <div
        className="grid-bg absolute inset-0 z-0 
      bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
      bg-size-[30px_30px] sm:bg-size-[40px_40px] opacity-35"
      ></div>

      {/* FLOATING PARALLAX BLOBS */}
      <div
        className="blob absolute -top-40 -left-40 
      w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]
      bg-purple-500/30 blur-[80px] sm:blur-[120px] rounded-full"
      ></div>

      <div
        className="blob absolute bottom-0 right-0 
      w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]
      bg-blue-500/30 blur-[80px] sm:blur-[120px] rounded-full"
      ></div>

      {/* MAIN CONTENT */}
      <div className="text-center z-50 max-w-2xl mx-auto w-full">
        {/* 404 SECTION */}
        <div className="mt-6 sm:mt-2 mb-10">
          <h2
            className="
        text-5xl sm:text-6xl md:text-7xl font-black tracking-wider 
        bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
        drop-shadow-[0_0_25px_rgba(0,200,255,0.4)] animate-glitch leading-tight font-lora"
          >
            404
          </h2>

          <p
            className="text-gray-400 mt-4 
          text-base sm:text-lg leading-relaxed px-4"
          >
            Let’s debug this and head back home before things get more
            undefined.
          </p>

          <div className="flex justify-center mt-8">
            <div
              className="h-px w-40 sm:w-64 
            bg-linear-to-r from-transparent via-cyan-400/40 to-transparent"
            ></div>
          </div>
        </div>

        {/* HERO TITLE */}
        <h1
          className="hero-title 
        text-4xl sm:text-6xl md:text-7xl font-extrabold 
        bg-linear-to-br from-purple-400 via-cyan-300 to-blue-400 
        bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,150,255,0.5)]"
        >
          Hi, I'm Krishna <span className="shake-hand inline-block"><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="55"/></span>
        </h1>

        <p
          className="hero-sub mt-3 sm:mt-4 
        text-xl sm:text-2xl text-gray-300 tracking-wide"
        >
          <span className="bg-[#ff014f] text-transparent bg-clip-text leading-tight font-lora italic">
            &lt;Frontend Software Developer /&gt;
          </span>
        </p>

        <p
          className="hero-text mt-3 text-gray-400 
        leading-relaxed text-base sm:text-lg px-4"
        >
          I create fast, modern, motion-driven interfaces using React, GSAP, and
          clean design principles — crafting digital experiences that feel
          alive.
        </p>

        <div className="hero-buttons flex flex-wrap justify-center gap-4 mt-8 px-4">
          <a
            href="#projects"
            className="cursor-hover px-5 py-3 rounded-lg border border-white/20 
        bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 
        hover:shadow-[0_0_15px_rgba(0,200,255,0.4)] text-sm sm:text-base"
          >
            View Projects <TbArrowRight className="inline ml-2" />
          </a>

          <a
            href="/"
            className="cursor-hover px-5 py-3 rounded-lg border border-cyan-300 
        text-cyan-300 hover:bg-cyan-300/10 transition-all duration-300 
        hover:shadow-[0_0_15px_rgba(0,255,200,0.4)] text-sm sm:text-base"
          >
            Go Back Home
          </a>
        </div>

        <div className="hero-socials flex justify-center gap-6 mt-10 text-gray-400">
          <a
            href="#"
            data-aos="fade-left"
            className="cursor-hover hover:text-white transition duration-300"
          >
            <TbBrandGithub size={28} className="sm:size-30" />
          </a>
          <a
            href="#"
            data-aos="fade-right"
            className="cursor-hover hover:text-white transition duration-300"
          >
            <TbBrandLinkedin size={28} className="sm:size-30" />
          </a>
        </div>
      </div>
    </div>
  );
}
