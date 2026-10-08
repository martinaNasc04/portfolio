import { motion } from "motion/react";

export const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="contact"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="px-4 w-150 bg-white/50 backdrop-blur-lg pt-5">
        <h2 className="text-4xl font-bold mb-4 tracking-wide bg-linear-to-r from-(--dark-blue-gray) to-(--blush-blue) bg-clip-text text-transparent leading-right text-center">
          Contatos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Github */}
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-2"> Github: </h3>
            <p>
              <a
                href="https://github.com/martinaNasc04"
                target="_blank"
                className="font-semibold text-blue-400  underline hover:scale-105 transition-colors"
              >
                {" "}
                <i className="fa-brands fa-github"></i> martinaNasc04
              </a>
            </p>
          </div>
          {/* Linkedin */}
          <div className="p-6  hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-2"> Linkedin: </h3>
            <p>
              <a
                href="https://www.linkedin.com/in/martinamirandanascimento"
                target="_blank"
                className="font-semibold text-blue-400  underline hover:scale-105 transition-colors"
              >
                {" "}
                <i className="fa-brands fa-linkedin"></i> Martina Miranda
                Nascimento
              </a>
            </p>
          </div>
          {/* Email */}
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-2"> Email: </h3>
            <p>
              <a
                href="mailto:martinanascimento@hotmail.com"
                target="_blank"
                className=" flex items-center font-semibold text-blue-400  underline hover:scale-105 transition-colors"
              >

                martinanascimento@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
