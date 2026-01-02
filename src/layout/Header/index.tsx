import { useState, useEffect, useRef } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FiSun, FiMoon, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../utills/header.utils";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Sticky Header Animation
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click for drawer
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        overlayRef.current &&
        overlayRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Portfolio menu links
  const links = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          backdrop-blur-xl border-b border-white/10
          ${
            isSticky
              ? "bg-black shadow-[0_4px_20px_rgba(0,0,0,0.4)] py-2"
              : "bg-black py-3"
          }
        `}
      >
        {/* gradient top line */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-amber-400 via-pink-500 to-purple-500" />

        {/* soft glow blob */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-linear-to-tr from-amber-500/10 via-pink-500/10 to-purple-500/10 blur-3xl" />
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6">
          {/* LOGO */}
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="border-amber-400 border-2 rounded-full w-16 h-16 bg-white"
          >
            <img
              src="/images/k-logo.png"
              alt="Logo"
              className="h-10 sm:h-12 drop-shadow-[0_0_8px_rgba(0,200,255,0.5)]
              transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <Link
                key={item.label}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative group text-gray-300 font-semibold text-[17px]
        transition-all duration-300 hover:text-red-500"
              >
                <span className="group-hover:tracking-wide transition-all">
                  {item.label}
                </span>

                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500
        group-hover:w-full transition-all duration-300"
                />
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden text-white text-3xl active:scale-90 transition"
            onClick={() => setOpen(true)}
          >
            <CgMenuRight />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* MOBILE DRAWER */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px]
          bg-[#0d1224] text-white z-50 py-6 shadow-xl border-l border-white/10
          transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.3,1)]
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-between pb-6 px-6">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className=" p-2 rounded-full hover:bg-white/10 
              transition duration-300 active:scale-90"
          >
            {dark ? (
              <FiSun size={20} className="text-yellow-500" />
            ) : (
              <FiMoon size={20} className="text-gray-500" />
            )}
          </button>
          <button
            onClick={() => setOpen(false)}
            className="text-4xl hover:text-red-500 active:scale-90 transition"
          >
            <FiX />
          </button>
        </div>
        <div className="border h-px mb-6"></div>

        {/* Sidebar Menu */}
        <div className="flex flex-col gap-6 text-lg px-6">
          {links.map((item, i) => (
            <Link
              key={item.label}
              to="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              style={{ animationDelay: `${i * 0.12}s` }}
              className="
                opacity-0 animate-slideInRight 
                hover:text-red-500 transition duration-200
                active:translate-x-1
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.5s ease forwards;
        }
      `}</style>
    </>
  );
}
