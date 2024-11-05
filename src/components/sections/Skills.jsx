import { BiLogoNetlify, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt, DiMongodb, } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaAws, FaCss3Alt, FaDigitalOcean, FaGitAlt, FaGitlab, FaHtml5, FaNodeJs, FaPython, FaReact, FaVuejs, FaPhp } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAntdesign, SiExpress, SiFlask, SiJest, SiNuxtdotjs, SiPassport, SiPostman, SiPythonanywhere, SiSequelize, SiTailwindcss, SiTensorflow, SiDjango, SiBootstrap, SiLaravel, SiGithub } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20 mb-20">
      {/* =========== SKILLS TITLE =========== */}
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
        Technologies I Use
      </h4>
      {/* =========== LIST OF SKILLS =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
				<span className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaHtml5 className="text-2xl" /> HTML
        </span>

				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaCss3Alt className="text-2xl" /> CSS
        </span>
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <IoLogoJavascript className="text-2xl" /> JavaScript
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <BiLogoTypescript className="text-2xl" /> TypeScript
        </span> */}
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaPhp className="text-2xl" /> PHP
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaPython className="text-2xl" /> Python
        </span>
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiExpress className="text-2xl" /> Express
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaNodeJs className="text-2xl" /> NodeJS
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiFlask className="text-2xl" /> Flask
        </span> */}
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiTailwindcss className="text-2xl" /> Tailwind
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiBootstrap className="text-2xl" /> Bootstrap
        </span>
        {/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaReact className="text-2xl" /> React
        </span> */}
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiLaravel className="text-2xl" /> Laravel
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiDjango className="text-2xl" /> Django
        </span>
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaVuejs className="text-2xl" /> VueJS
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiNuxtdotjs className="text-2xl" /> NuxtJS
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiJest className="text-2xl" /> Jest
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiTensorflow className="text-2xl" /> Tensorflow
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiAntdesign className="text-2xl" /> Ant Design Vue
        </span> */}
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaGitAlt className="text-2xl" /> Git
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiGithub className="text-2xl" /> Github
        </span>
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaGitlab className="text-2xl" /> Gitlab
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <BiLogoNetlify className="text-2xl" /> Netlify
        </span> */}
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <CgVercel className="text-2xl" /> Vercel
        </span>
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <IoLogoFirebase className="text-2xl" /> Firebase
        </span> */}
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiPostman className="text-2xl" /> Postman
        </span>
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaDigitalOcean className="text-2xl" /> Digital Ocean
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaAws className="text-2xl" /> AWS EC2
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiPythonanywhere className="text-2xl" /> PythonAnywhere
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <DiMongodb className="text-2xl" /> MongoDB
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <BiLogoPostgresql className="text-2xl" /> PostgreSQL
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiSequelize className="text-2xl" /> Sequelize
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <SiPassport className="text-2xl" /> PassportJS
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-[#C96868] dark:bg-[#C96868]/30 dark:text-[#E78F81]">
          <FaDocker className="text-2xl" /> Docker
        </span> */}
      </div>
    </section>
  );
}

export default Skills;
