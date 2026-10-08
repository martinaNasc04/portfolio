import { motion } from "motion/react";
export const About = () => {
  const frontendSkills = ["Next.js", "React", "TailwindCSS"];
  const backendSkills = ["Python", "Django"];

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto  md:px-4 bg-white/50 backdrop-blur-lg pt-10 rounded-lg">
        <h2 className="text-4xl font-bold md:mb-6 bg-linear-to-r from-(--dark-blue-gray) to-(--blush-blue) bg-clip-text text-transparent leading-right text-center tracking-wide">
          Sobre mim
        </h2>
        {/* Habilidades */}
        <div className=" w-full glass rounded-xl p-4 hover:-translate-y-1 transition-all">
          <p className=" text-black mb-2 font-semibold text-center">
            Desenvolvo aplicações web com foco no front-end e com um pouco de
            experiência em back-end.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 rounded-xl justify-center w-full">
            <div className=" flex flex-col  p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold mb-4 text-center">Frontend</h3>
              <div className="flex flex-wrap justify-center gap-2 ">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className=" font-semibold  py-1 md:px-3 rounded-full text-center text-sm bg-(--dark-blue-gray) text-white w-1/2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className=" p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-lg font-bold mb-4 text-center">Backend</h3>
              <div className="flex flex-wrap justify-center gap-2 ">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="text-center font-semibold py-1 px-3 rounded-full text-sm bg-(--dark-blue-gray) text-white w-1/2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Educação */}
        <div className=" grid md:grid-cols-1 gap-6 mt-8">
          <div className="text-black p-6 rounded-xl  shadow-xl hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 "> &#128214; Educação: </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Ensino Médio Completo</strong> - SESI Campus Votuporanga
                - <em>2013-2015</em>
              </li>
              <li>
                <strong>Análise e Desenvolvimento de Sistemas </strong> - IFSP
                Campus Votuporanga - <em>2018-2021</em>
              </li>
              <li>
                <strong>Inglês Avançado </strong> - YES! Idiomas Votuporanga -{" "}
                <em>2018-2023</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
