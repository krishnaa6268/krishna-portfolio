import type { FC } from "react";

import { BsGithub } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaReact, FaYoutube } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiHtml5Fill } from "react-icons/ri";

const Media: FC = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* Social Links */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
          <a
            href="https://www.youtube.com/@your-channel"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://www.instagram.com/your-instagram/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Best skills in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <RiHtml5Fill />
          </span>
          <span className="bannerIcon">
            <IoLogoJavascript />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
