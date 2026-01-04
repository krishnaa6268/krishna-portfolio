// src/components/Skills.tsx
import { useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// types
type SkillItem = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  value: number; // 0–100
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  description?: string;
};

// sample data (update image paths to match your public/asset folder)
const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: "Expert", value: 100 },
      { name: "CSS3", level: "Advanced", value: 85 },
      { name: "JavaScript", level: "Expert", value: 95 },
      { name: "React.js", level: "Expert", value: 95 },
      { name: "Tailwind CSS", level: "Expert", value: 90 },
    ],
  },
  {
    title: "Backend & DSA",
    items: [
      { name: "Python", level: "Advanced", value: 75 },
      { name: "Node.js", level: "Intermediate", value: 65 },
      { name: "Java", level: "Advanced", value: 80 },
      { name: "MySQL", level: "Advanced", value: 80 },
      { name: "Google Firebase", level: "Intermediate", value: 75 },
      { name: "Data Structures & Algorithms", level: "Expert", value: 95 },
      { name: "C Language", level: "Advanced", value: 80 },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: "Expert", value: 95 },
      { name: "Vercel", level: "Advanced", value: 80 },
      { name: "Figma / Canva", level: "Advanced", value: 75 },
      { name: "Responsive Design", level: "Expert", value: 90 },
    ],
  },
];

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Basic Excel Training 2019",
    issuer: "LNCT Bhopal",
    year: "2019",
    image: "/certificates/excel-basic-2019.jpg",
    description:
      "Hands-on training focused on Excel fundamentals and data handling.",
  },
  {
    id: 2,
    title: "Excel 2019 – Beginner Training",
    issuer: "Microsoft Partner Program",
    year: "2020",
    image: "/certificates/excel-beginner-2019.jpg",
    description: "Covered formulas, formatting, and basic business reporting.",
  },
  {
    id: 3,
    title: "Microsoft Excel for Data Analyst",
    issuer: "Udemy",
    year: "2021",
    image: "/certificates/excel-data-analyst.jpg",
    description:
      "Data analysis, dashboards, and automation workflows in Excel.",
  },
  {
    id: 4,
    title: "TCS NQT – Qualified for Interview",
    issuer: "Tata Consultancy Services",
    year: "2024",
    image: "/certificates/tcs-nqt-2024.jpg",
    description: "Cleared NQT assessment and shortlisted for interview rounds.",
  },
];

// motion variants
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.08,
      duration: 0.5,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Skills = () => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  // inline style for the complex radial background (avoids Tailwind arbitrary parsing issues)
  const radialBgStyle: CSSProperties = {
    background:
      "radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at bottom, rgba(139,92,246,0.18), transparent 55%)",
  };

  return (
    <section
      id="skills"
      className="relative py-10 lg:py-20 px-6 font-assistant"
      style={{ backgroundColor: "#050816" }}
    >
      <img
        src="/images/main-bg.png"
        className="w-full h-full absolute top-0 left-0 object-cover pointer-events-none"
      />
      {/* background gradients */}
      <div
        style={radialBgStyle}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl gap-3 pt-5 pb-7">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400 mt-5 lg:mt-0">
            Skillset & Certifications
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-100 sm:text-4xl md:text-5xl">
            Skills & <span className="text-sky-400">Technologies</span>
          </h2>
          <p className="mx-auto py-4 max-w-2xl text-sm text-slate-400 sm:text-base line-clamp-2">
            These are the technologies and tools I work with daily, along with
            the certifications that shaped my journey.
          </p>
        </motion.div>

        {/* skills grid - lg */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden lg:grid mt-10 gap-6 md:mt-14 md:grid-cols-3"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="relative flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-100">
                  {category.title}
                </h3>
                <span className="rounded-full bg-slate-900/60 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Core Skills
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-[11px] text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800/80">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-linear-to-r from-sky-400 via-cyan-400 to-emerald-400 shadow-[0_0_18px_rgba(56,189,248,0.55)]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 text-[11px] text-slate-400">
                <span className="rounded-full bg-slate-900/40 px-2 py-1">
                  Animated skill bars for easy visual understanding.
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

          {/* skills grid - mob */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -4 }}
              className="
        rounded-2xl border border-white/5
        bg-white/5 backdrop-blur-xl
        p-5 sm:p-6
      "
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold text-slate-100">
                  {category.title}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">
                  Core
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className={`
              rounded-full px-2 py-1 text-xs font-medium
              border border-white/10 transition
              ${
                skill.level === "Expert" && "bg-emerald-500/15 text-emerald-300"
              }
              ${skill.level === "Advanced" && "bg-sky-500/15 text-sky-300"}
              ${
                skill.level === "Intermediate" &&
                "bg-violet-500/15 text-violet-300"
              }
            `}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>

              {/* Footer */}
              <p className="mt-4 text-[11px] text-slate-400">
                Hands-on experience through real projects
              </p>
            </motion.div>
          ))}
        </div>

        {/* certificates */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-xl font-semibold text-slate-100 sm:text-2xl">
                Certificates & Achievements
              </h3>
              <p className="mt-1 text-sm text-slate-400 sm:text-[15px]">
                Swipe through to explore the certifications that back my skills.
                Click any card to view it in detail.
              </p>
            </div>
            <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-300">
              Interactive Slider
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6"
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={18}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-10"
            >
              {certificates.map((cert) => (
                <SwiperSlide key={cert.id}>
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 text-left shadow-lg shadow-sky-950/40 transition-transform duration-300 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-80" />
                      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-sky-500/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-950">
                        {cert.year}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <h4 className="line-clamp-2 text-sm font-semibold text-slate-100">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400">{cert.issuer}</p>
                      <p className="line-clamp-2 text-[11px] text-slate-400/80">
                        {cert.description}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-1 text-[11px] font-medium text-sky-300">
                        View certificate
                        <span className="text-sky-400 group-hover:translate-x-0.5 transition-transform">
                          ↗
                        </span>
                      </span>
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>

      {/* modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-[#050816] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveCert(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-slate-200 transition hover:bg-black"
              aria-label="Close certificate preview"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-0 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div className="relative flex items-center justify-center bg-slate-900/70 p-4 md:p-6">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="max-h-[70vh] w-full rounded-xl object-contain"
                />
              </div>

              <div className="flex flex-col gap-3 p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-400">
                  Certificate Preview
                </p>
                <h3 className="text-lg font-semibold text-slate-100 md:text-xl">
                  {activeCert.title}
                </h3>
                <p className="text-sm text-slate-300">
                  <span className="font-medium text-slate-200">Issuer:</span>{" "}
                  {activeCert.issuer}
                </p>
                <p className="text-sm text-slate-300">
                  <span className="font-medium text-slate-200">Year:</span>{" "}
                  {activeCert.year}
                </p>
                {activeCert.description && (
                  <p className="mt-1 text-sm text-slate-400">
                    {activeCert.description}
                  </p>
                )}

                <div className="mt-4 rounded-xl border border-sky-500/20 bg-sky-500/5 px-4 py-3 text-xs text-slate-200">
                  <p className="font-medium text-sky-300">
                    How this adds to my portfolio
                  </p>
                  <p className="mt-1 text-slate-300">
                    This certification strengthens my expertise and validates my
                    hands-on experience in real-world projects.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-md shadow-sky-900/40 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 "
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Skills;
