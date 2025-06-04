import user_info from "../../data/user_info.js";
import { CiLink } from "react-icons/ci";

function WritingProjects() {
  return (
    <section id="writing-projects" className="">
      <h4 className="text-4xl font-bold text-center mt-28 dark:text-white">
        Writing Projects
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16 mt-10">
        {user_info.writingProjects.map((project, index) => (
          <div
            key={index}
            className="hover:bg-zinc-100 hover:dark:bg-[#1E3E62] transition-all duration-300 p-6 md:rounded-xl flex flex-col h-full"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
            )}
            <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400 mb-2">{project.platform}</p>
            <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mb-4">
              {project.description}
            </p>
            <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium mt-auto">
              <a
                href={project.link}
                className="flex gap-2 mt-2 hover:text-[#C96868] hover:dark:text-[#E78F81] cursor-pointer transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLink className="text-2xl self-center" />
                <span className="text-xs self-center">
                  Get Know More
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WritingProjects;