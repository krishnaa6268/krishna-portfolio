import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabKey = "professional" | "education" | "training";

const TAB_CONFIG: Record<
  TabKey,
  {
    label: string;
    accent: string;
    pillActive: string;
  }
> = {
  professional: {
    label: "Experience",
    accent: "from-violet-500 to-indigo-500",
    pillActive: "bg-linear-to-r from-violet-500 to-indigo-500",
  },
  training: {
    label: "Training",
    accent: "from-cyan-500 to-sky-500",
    pillActive: "bg-linear-to-r from-cyan-500 to-sky-500",
  },
  education: {
    label: "Education",
    accent: "from-pink-500 to-rose-500",
    pillActive: "bg-linear-to-r from-pink-500 to-rose-500",
  },
};

type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  tag?: string;
  tagValue?: string;
};

const education: TimelineItem[] = [
  {
    title: "Master of Computer Applications",
    subtitle: "LNCT (RGPV) · Bhopal",
    period: "2023 – 2025",
    tag: "Percentage",
    tagValue: "88.20%",
  },
  {
    title: "Bachelor of Computer Applications",
    subtitle: "Jiwaji University (SoS) · Gwalior",
    period: "2019 – 2022",
    tag: "Percentage",
    tagValue: "78.30%",
  },
  {
    title: "Senior Secondary (XII) & Secondary (X)",
    subtitle: "PCM & Computer Science · UP Board",
    period: "2017 – 2019",
    tag: "Percentage",
    tagValue: "XII: 74% · X: 68%",
  },
];

const professional: TimelineItem[] = [
  {
    title: "Frontend Software Engineer",
    subtitle: "Codes for Tomorrow · Indore",
    period: "Dec 2025 – Present",
    tag: "Type",
    tagValue: "Full-time",
  },
  {
    title: "Full Stack Web Developer",
    subtitle: "Noble Citizen Foundation (NGO) · New Delhi",
    period: "May 2025 – Present",
    tag: "Type",
    tagValue: "Volunteer",
  },
  {
    title: "Frontend Developer Intern",
    subtitle: "Wyreflow Technologies · Bhopal",
    period: "Mar 2025 – Jun 2025",
    tag: "Type",
    tagValue: "Internship",
  },
];

const training: TimelineItem[] = [
  {
    title: "Node.js Training",
    subtitle: "Self-Paced",
    period: "2025 – Present",
    tag: "Stack",
    tagValue: "MERN",
  },
  {
    title: "React.js & Redux Training",
    subtitle: "Knowledge Gate",
    period: "Sep 2025",
    tag: "Focus",
    tagValue: "Frontend",
  },
  {
    title: "Developing GenAI Applications with Gemini & Streamlit",
    subtitle: "GDSC LNCTE · Bhopal",
    period: "May 2024",
    tag: "Focus",
    tagValue: "GenAI",
  },
  {
    title: "SQL Training",
    subtitle: "Hacker Rank",
    period: "Apr 2024",
    tag: "Focus",
    tagValue: "Database",
  },
  {
    title: "AICTE–Cisco Virtual Internship in Networking",
    subtitle: "Cisco Networking Academy · NIIT Foundation",
    period: "May 2024 – Jul 2024",
    tag: "Focus",
    tagValue: "Networking",
  },
  {
    title: "C++ Programming Training",
    subtitle: "MySirG.com",
    period: "Aug 2020 - Oct 2020",
    tag: "Focus",
    tagValue: "Programming",
  },
];

const listVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  const [active, setActive] = useState<TabKey>("professional");

  const dataMap: Record<TabKey, TimelineItem[]> = {
    professional,
    education,
    training,
  };

  const data = dataMap[active];
  const accent = TAB_CONFIG[active].accent;

  return (
    <section
      id="experience"
      className="relative bg-[#050509] py-10 lg:py-20 px-4 overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 my-4 text-xs tracking-widest text-violet-300 mt-6">
            CAREER PATH
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">
            Experience & Education
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            A tree of how my learning and professional journey has grown over
            time — from classrooms to real-world projects.
          </p>
        </motion.div>

        {/* tabs */}
        <div className="mb-10 justify-center">
          <div className="relative mx-auto flex max-w-full justify-center">
            <div
              className="
        flex gap-1 rounded-full border border-slate-700 bg-slate-900/70 p-1 backdrop-blur
        overflow-x-auto scrollbar-hide
        sm:overflow-visible sm:justify-center
      "
            >
              {(Object.keys(TAB_CONFIG) as TabKey[]).map((key) => {
                const tab = TAB_CONFIG[key];
                const isActive = active === key;

                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`
              shrink-0 rounded-full px-5 py-2 text-sm font-medium transition
              ${
                isActive
                  ? `${tab.pillActive} text-white shadow`
                  : "text-slate-400 hover:text-slate-200"
              }
            `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700/70" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={listVariant}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 20 }}
              className="space-y-8 pl-12"
            >
              {data.map((item, i) => (
                <motion.div
                  key={item.title + i}
                  variants={itemVariant}
                  className="relative"
                >
                  {/* dot */}
                  <div className="absolute -left-[37.5px] top-3 flex h-3 w-3 items-center justify-center shrink-0">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-violet-500/30" />
                    <span
                      className={`relative h-4 w-4 shrink-0 rounded-full bg-linear-to-r ${accent} *:shadow-[0_0_25px_rgba(139,92,246,1.2)]`}
                    />
                  </div>

                  {/* card */}
                  <div
                    className="
  rounded-2xl border border-slate-700/70 bg-slate-900/85
  p-4 sm:p-5
  backdrop-blur transition
  hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40
"
                  >
                    {/* Top row */}
                    <div
                      className="
    flex flex-col gap-2
    sm:flex-row sm:items-start sm:justify-between
  "
                    >
                      {/* Title + subtitle */}
                      <div className="min-w-0">
                        <h4
                          className="
        text-base font-semibold text-white
        sm:text-lg md:text-xl
        leading-snug
      "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
        mt-1 text-sm md:text-md text-slate-400
        line-clamp-2
      "
                        >
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Tag */}
                      {item.tagValue && (
                        <span
                          className="
        self-start
        rounded-full bg-violet-500/15
        px-3 py-1
        text-sm font-semibold text-violet-300
        whitespace-nowrap
      "
                        >
                          {item.tagValue}
                        </span>
                      )}
                    </div>

                    {/* Period */}
                    <p
                      className="
    mt-3 text-[11px] sm:text-[12px]
    uppercase tracking-[0.18em]
    text-slate-500
  "
                    >
                      {item.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
