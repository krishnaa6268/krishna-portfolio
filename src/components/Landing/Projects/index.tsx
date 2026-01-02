// src/components/Landing/Projects/Projects.tsx

import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Github, Globe2, ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASE,
    } as Transition,
  },
};

const projects = [
  {
    id: 1,
    title: "Blood Connect | Web App",
    subtitle: "Connecting donors with people in need.",
    description:
      "A responsive web app that lets users register as donors or recipients, search by location & blood group, and manage donation requests in a clean interface.",
    image: "/images/projects/blood-connect.png", // replace with your image
    tech: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Book Browse | Marketplace",
    subtitle: "A mini marketplace for book lovers.",
    description:
      "Full-featured book marketplace where users can browse, list, and manage books. Includes authentication, wishlists, and a clean dashboard experience.",
    image: "/images/projects/book-browse.png",
    tech: ["React", "Firebase Auth", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Text Analyzer | React App",
    subtitle: "Understand your text in one click.",
    description:
      "Utility app that analyzes user text for word & character counts, case transforms, and quick clipboard actions – built with a focus on UX & accessibility.",
    image: "/images/projects/text-analyzer.png",
    tech: ["React", "TypeScript", "CSS Modules"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Blood Connect | Web App",
    subtitle: "Connecting donors with people in need.",
    description:
      "A responsive web app that lets users register as donors or recipients, search by location & blood group, and manage donation requests in a clean interface.",
    image: "/images/projects/blood-connect.png", // replace with your image
    tech: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gray-950 py-10 lg:py-20 px-6 font-assistant"
    >
      <img
        src="/images/stars.png"
        className="w-full h-full absolute top-0 left-0  object-fill pointer-events-none"
      />
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1600px] mx-auto"
      >
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-3 mt-6 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            My{" "}
            <span className="relative inline-block group">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-rose-400 to-violet-500">
                Projects
              </span>
              <span className="absolute -bottom-[3px] left-0 h-[1.5px] w-0 bg-linear-to-r from-amber-400 via-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </h2>
          <p className="max-w-4xl my-3 text-base text-[18px] leading-relaxed  text-neutral-400 mx-auto">
            A quick look at some of the things I&apos;ve built while exploring
            modern web technologies and clean UI design.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#080b16]/90 shadow-[0_22px_60px_rgba(0,0,0,0.75)]"
            >
              {/* top border glow */}
              <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-amber-400/60 via-pink-500/60 to-violet-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* thumbnail */}
              <div className="relative overflow-hidden rounded-t-3xl bg-black/40">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover sm:h-52"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35 }}
                />
                {/* subtle top overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#080b16] via-transparent to-transparent opacity-70" />
              </div>

              {/* content */}
              <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-pink-500">
                    Featured Project
                  </p>
                  <h3 className="mt-1 text-lg sm:text-xl font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-400">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-1 flex flex-wrap gap-2 text-[11px] font-medium text-slate-300">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between gap-4">
                  {/* buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition-transform group-hover:scale-105 hover:bg-white/10"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition-transform group-hover:scale-105 hover:bg-white/10"
                    >
                      <Globe2 className="h-4 w-4" />
                    </a>
                  </div>

                  {/* view project link */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300 transition-colors group-hover:text-amber-300"
                  >
                    View Project
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
