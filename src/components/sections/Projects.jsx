import { motion } from "motion/react";
const projects = [
  {
    name: "NotesApp",
    description: "Um aplicativo web para guardar notas",
    toolsLanguages: ["React", "Djando"],
    link: "https://github.com/martinaNasc04/notesApp",
  },
  {
    name: "FindPet",
    description:
      "Uma plataforma dedicada a unir animais perdidos e aqueles que buscam um lar",
    toolsLanguages: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Drizzle",
      "Typescript",
      "Clerk",
      "Cloudinary",
    ],
    link: "https://github.com/martinaNasc04/find-pet",
    liveProjectLink: "https://find-pet-dusky.vercel.app/",
  },
  {
    name: "TakeNotes",
    description:
      "Aplicação web projetada para a criação e gerenciamento de notas de forma eficiente e intuitiva",
    toolsLanguages: ["Next.js", "Prisma", "Tailwind", "Typescript", "Clerk"],
    link: "https://github.com/martinaNasc04/take-notes",
    liveProjectLink: "https://take-notes-sooty-xi.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="projects"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="max-w-5xl mx-auto px-4 bg-white/50 backdrop-blur-md pt-10 pb-2 rounded-lg">
        <h2 className="text-4xl font-bold mb-6 text-center tracking-wide bg-linear-to-r from-(--dark-blue-gray) to-(--blush-blue) bg-clip-text text-transparent leading-right ">
          Projetos
        </h2>

        {/* Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="flex flex-col px-3 w-full md:w-3/4 space-y-3 shadow-xl pb-2"
            >
              <h3 className="text-center font-bold md:text-2xl">
                {project.name}
              </h3>
              <p className=" text-sm md:text-base text-center md:text-justify font-semibold">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-3 ">
                {project.toolsLanguages.map((tech, key) => (
                  <span
                    key={key}
                    className="text-center py-1 px-2 rounded-full text-sm bg-(--dark-blue-gray) text-white font-bold hover:scale-105 shadow-lg hover:shadow-(--dark-blue-gray)/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-(--dark-chorcoal) font-semibold">
                <a
                  href={project.link}
                  className=" text-sm md:text-base  hover:scale-105 underline"
                >
                  Ver projeto no GitHub
                </a>
                {project.liveProjectLink && (
                  <a
                    href={project.liveProjectLink}
                    className="text-sm md:text-base  hover:scale-105 underline"
                  >
                    Acesse o site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
