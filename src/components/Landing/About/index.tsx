import React from "react";
import { motion } from "framer-motion";
import { SiFreelancer } from "react-icons/si";
import { scrollToSection } from "../../../utills/header.utils";
import {
  Code2,
  LayoutTemplate,
  Rocket,
  Users,
  BookOpen,
  Atom,
  Flag,
} from "lucide-react";


const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-10 lg:py-20 px-6 font-assistant"
    >
      <img
        src="/images/stars.png"
        className="w-full h-full absolute top-0 left-0 object-fill pointer-events-none"
      />
      {/* subtle background accents */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-[1600px] mx-auto"
      >
        {/* Header */}

        <div className="flex flex-col items-center text-center gap-3 mt-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Get to{" "}
            <span className="relative inline-block group">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-rose-400 to-violet-500">
                know
              </span>
              <span className="absolute -bottom-[3px] left-0 h-[1.5px] w-0 bg-linear-to-r from-amber-400 via-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </span>{" "}
            me
          </h2>
          <p className="max-w-4xl my-3 text-base text-[18px] leading-relaxed  text-neutral-400 mx-auto">
            I'm a frontend-focused developer who loves crafting clean,
            responsive, and performant experiences. My journey started with
            curiosity about how the web works – and turned into a passion for
            building products that feel delightful to use.
          </p>
          <p className="text-sm text-neutral-400 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Based in India  · Working globally
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          {/* What I Do */}
          <motion.div variants={stagger} className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-linear-to-r from-pink-500 to-sky-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                What I Do
              </p>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              Turning ideas into interactive experiences.
            </h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Card 1 */}
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 sm:p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-px rounded-2xl bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/15">
                    <LayoutTemplate className="h-5 w-5 text-pink-400" />
                  </div>
                  <span className="rounded-full border border-pink-500/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-pink-300/90">
                    UI / Frontend
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-50">
                  Crafting Modern Web Interfaces
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  Designing and implementing clean, responsive interfaces in
                  React with an emphasis on smooth interactions, accessibility,
                  and a consistent user experience across screen sizes.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 sm:p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-px rounded-2xl bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15">
                    <Rocket className="h-5 w-5 text-sky-400" />
                  </div>
                  <span className="rounded-full border border-sky-500/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-sky-300/90">
                    Product Builds
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-50">
                  Turning Ideas into Working Products
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  I enjoy taking everyday challenges—like tracking jobs,
                  planning tasks, or managing routines—and shaping them into
                  minimal, dependable web apps that feel simple and purposeful
                  to use.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 sm:p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-px rounded-2xl bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
                    <BookOpen className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="rounded-full border border-emerald-500/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300/90">
                    Continuous Growth
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-50">
                  Expanding My Tech Stack
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  Exploring Node.js, Express, MongoDB, and modern tooling so I
                  can understand how data flows from UI to backend and build
                  more complete, end-to-end web solutions.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 sm:p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-px rounded-2xl bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15">
                    <Users className="h-5 w-5 text-amber-300" />
                  </div>
                  <span className="rounded-full border border-amber-500/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-200/90">
                    Teamwork
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-50">
                  Working With People & Communities
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  I like building alongside designers, developers, and community
                  members— especially in student groups and NGOs—to ship
                  features that are useful, empathetic, and create real-world
                  impact.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* My Journey card */}
          <motion.div
            variants={cardVariant}
            className="relative rounded-3xl border border-white/5 bg-linear-to-br from-white/10 via-white/5 to-transparent p-px shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
          >
            <div className="relative h-full rounded-3xl bg-[#050818]/90 px-6 py-7 sm:px-8 sm:py-9">
              <div className="absolute inset-x-10 top-0 h-px bg-linear-to-r from-pink-500/40 via-fuchsia-500/40 to-sky-500/40" />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
                    My Journey
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                    From curiosity to clean code.
                  </h3>
                </div>
                <Code2 className="hidden sm:block h-9 w-9 text-pink-400/80" />
              </div>

              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300">
                My journey into web development started with a simple question –
                &quot;How do these websites actually work?&quot; That curiosity
                led me to explore HTML, CSS, JavaScript, and later modern
                frameworks like React.
              </p>

              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-pink-500" />
                  <p>
                    Completed my{" "}
                    <span className="font-medium text-slate-50">
                      MCA from LNCT Bhopal
                    </span>{" "}
                    and built multiple real-world projects focusing on UI, UX,
                    and performance.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                  <p>
                    Currently sharpening my{" "}
                    <span className="font-medium text-slate-50">
                      frontend engineering
                    </span>{" "}
                    skills, exploring full-stack tools, and contributing to
                    meaningful products.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <p>
                    My goal is simple:{" "}
                    <span className="font-medium text-slate-50">
                      design &amp; ship experiences
                    </span>{" "}
                    that feel smooth, thoughtful, and helpful to people using
                    them.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="relative inline-flex items-center justify-center rounded-full border border-pink-500/60 bg-linear-to-r from-pink-500 via-fuchsia-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Let&apos;s Work Together
                </button>
                <p className="text-xs text-slate-400">
                  Open to internships, freelance work, and full-time roles in
                  frontend / web development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature / What I Do cards (YouTuber / React Dev / Founder) */}
        <motion.div variants={stagger} className="mt-16 sm:mt-20 space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500">
                Features
              </span>
              <span className="hidden h-px w-12 bg-linear-to-r from-pink-500/70 to-transparent sm:block" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Beyond coding, here are a few hats I enjoy wearing.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* React Dev */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#070b19] p-6 sm:p-7"
            >
              <div className="absolute inset-0 bg-linear-to-br from-fuchsia-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-500/20">
                  <Atom className="h-5 w-5 text-fuchsia-300" />
                </div>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-slate-50">
                React.js Developer
              </h4>
              <p className="mt-2 text-sm text-slate-400">
                Building fast, interactive, and scalable web apps using React,
                TypeScript, and modern tooling — from static sites to dynamic
                dashboards.
              </p>
            </motion.div>

            {/* Freelance */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#070b19] p-6 sm:p-7"
            >
              <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/20">
                  <SiFreelancer className="h-5 w-5 text-pink-400" />
                </div>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-slate-50">
                Freelancer
              </h4>
              <p className="mt-2 text-sm text-slate-400">
                I love sharing insights, tutorials, and my learning journey in
                tech — helping others get started and grow as developers.
              </p>
            </motion.div>

            {/* Founder */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#070b19] p-6 sm:p-7"
            >
              <div className="absolute inset-0 bg-linear-to-br from-sky-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/20">
                  <Flag className="h-5 w-5 text-sky-300" />
                </div>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-slate-50">
                Community Builder
              </h4>
              <p className="mt-2 text-sm text-slate-400">
                Co-creating projects, clubs, and initiatives where people learn
                together, ship things, and support each other&apos;s growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
