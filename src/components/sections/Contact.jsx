import user_info from "../../data/user_info.js";

import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { DiGithubAlt, DiMongodb } from "react-icons/di";
import { SiGithub } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-[#C96868] dark:text-[#E78F81]">
          Ways to Connect with Me
        </span>
      </h4>

      {/* =========== DESCCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

      {/* =========== LINKS =========== */}
      <div className="mt-12">
        {/* =========== FACEBOOK =========== */}
        {/* <a
          href={user_info.socials.facebook}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300  hover:text-zinc-700 transition-all duration-300"
        >
          <FaFacebook className="self-center text-lg text-[#C96868] dark:text-[#E78F81]" />
          <span className="self-center">Follow on Facebook</span>
        </a> */}

        {/* =========== X =========== */}
        {/* <a
          href={user_info.socials.twitter}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaSquareXTwitter className="self-center text-lg text-[#C96868] dark:text-[#E78F81]" />
          <span className="self-center">Follow on X</span>
        </a> */}

        {/* =========== LINKEDIN =========== */}
        <a
          href={user_info.socials.linkedin}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4 text-sm font-semibold"
        >
          <FaLinkedin className="self-center text-lg text-[#C96868] dark:text-[#E78F81]" />
          <span className="self-center">Connect on Linkedin!</span>
        </a>

        {/* =========== INSTAGRAM =========== */}
        <a
          href={user_info.socials.instagram}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4 text-sm font-semibold"
        >
          <FaInstagram className="self-center text-lg text-[#C96868] dark:text-[#E78F81]" />
          <span className="self-center">Get to know me more on Instagram!</span>
        </a>
        
        {/* =========== GITHUB =========== */}
        <a
          href={user_info.socials.github}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4 text-sm font-semibold"
        >
          <SiGithub className="self-center text-lg text-[#C96868] dark:text-[#E78F81]" />
          <span className="self-center">Let's meet on Github!</span>
        </a>
      </div>

      <hr className="mt-6 w-72 border dark:border-zinc-800" />

      {/* =========== EMAIL =========== */}
      <a
        href={`mailto:${user_info.main.email}`}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30 text-sm font-semibold"
      >
        <MdEmail className="self-center text-lg text-[#C96868] dark:text-[#E78F81]" />
        <span>{user_info.main.email}</span>
      </a>
    </section>
  );
}

export default Contact;
