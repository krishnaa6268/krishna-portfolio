import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaFacebookF,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../utills/header.utils";

const socials = [
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/krishnaa6268/",
    hover:
      "group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:shadow-[0_0_20px_rgba(10,102,194,0.65)]",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/krishnaa6268/",
    hover:
      "group-hover:bg-gray-600 group-hover:border-zinc-400 group-hover:shadow-[0_0_20px_rgba(250,250,250,0.25)]",
  },
  {
    Icon: FaXTwitter,
    label: "Twitter",
    href: "https://twitter.com/VivekGuptaMDz/",
    hover:
      "group-hover:bg-[#1DA1F2] group-hover:border-[#1DA1F2] group-hover:shadow-[0_0_20px_rgba(29,161,242,0.65)]",
  },
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/8*****9/",
    hover:
      "group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.65)]",
  },
  {
    Icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/krishnaguptamdz/",
    hover:
      "group-hover:bg-[#1877F2] group-hover:border-[#1877F2] group-hover:shadow-[0_0_20px_rgba(24,119,242,0.65)]",
  },
  {
    Icon: FaQuestionCircle,
    label: "Help",
    href: "https://krishnaaportfolio.vercel.app/query.html",
    hover:
      "group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.65)]",
  },
];

export default function FooterBottom() {
  return (
    <div className="relative w-full bg-black border-t border-slate-800 overflow-hidden">
      {/* gradient top line */}
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-amber-400 via-pink-500 to-purple-500" />

      {/* soft glow blob */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-linear-to-tr from-amber-500/10 via-pink-500/10 to-purple-500/10 blur-3xl" />

      <div className="relative max-w-[1600px] mx-auto px-6 py-8 items-center justify-between flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Social icons */}
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          {socials.map(({ Icon, label, href, hover }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="group relative"
            >
              {/* outer animated ring */}
              <span className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-tr from-amber-400 via-pink-500 to-purple-500 opacity-0 blur-xl group-hover:opacity-80 transition-opacity duration-300" />

              <span
                className={`relative flex h-9 w-9 items-center justify-center rounded-full 
                  border border-slate-600 bg-black/60 text-slate-300
                  transition-all duration-200 ease-out
                  group-hover:-translate-y-1 group-hover:scale-110 
                  group-hover:rotate-6 group-active:scale-95
                  ${hover}`}
              >
                <Icon className="text-[18px]" />
              </span>
            </a>
          ))}
        </div>

        {/* Right side: chip + text */}
        <div className="flex flex-col items-center md:items-start sm:items-end gap-4">
          {/* small callout chip */}
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-xs sm:text-[0.9rem] text-slate-300 shadow-[0_0_30px_rgba(15,23,42,0.7)]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for freelance &amp; remote roles</span>
          </Link>

          {/* Text */}
          <p className="text-xs sm:text-sm md:text-[1rem] text-slate-400 text-center sm:text-right leading-relaxed">
            All Rights Reserved ©{new Date().getFullYear()} | Developed with{" "}
            <span className="relative inline-flex items-center justify-center mx-[2px]">
              <span className="absolute h-4 w-4 rounded-full bg-pink-400 blur-sm animate-ping" />
              <span className="relative text-pink-500">❤</span>
            </span>
            by{" "}
            <span className="relative inline-block font-semibold text-slate-200 group">
              <span className="relative">
                KrishnaMDz
                <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-0 bg-linear-to-r from-amber-400 via-pink-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </span>
            </span>
            {" · "} 🇮🇳
          </p>
        </div>
      </div>
    </div>
  );
}
