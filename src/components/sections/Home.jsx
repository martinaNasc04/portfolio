import { motion } from "motion/react";
export const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:true}}
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <main className="w-full flex flex-col gap-2 md:flex-row justify-center items-center text-(--dark-charcoal) px-5 md:px-10 pt-10 ">
        <div className="flex flex-col bg-white/50 backdrop-blur-md w-full md:w-1/2 justify-center  px-4 py-2 space-y-5 md:space-y-10 rounded-lg shadow-xl">
          <div className="flex flex-col w-full space-y-2">
            <h1 className=" text-3xl md:text-6xl">Olá</h1>
            <h2 className="box-decoration-clone text-xl font-semibold md:text-3xl bg-linear-to-r from-(--dark-blue-gray) to-(--smooth-grey) bg-clip-text text-transparent leading-right">
              Me chamo <br /> Martina{" "}
              <span className="font-extrabold">Miranda</span>
            </h2>
            <h2 className="text-xl md:text-2xl font-semibold">
              Desenvolvedora web
            </h2>
          </div>
          <div className="flex w-full items-center  justify-center gap-5 md:gap-10 text-sm md:text-xl">
            <a
              href="#projects"
              className="bg-(--dark-blue-gray) hover:bg-(--dark-blue-gray)/50 hover:-translate-y-0.5 text-white p-2 rounded-full font-semibold transition-all"
            >
              Ver projetos
            </a>
            <a
              href="#contacts"
              className="border-2 border-[#5a3c9f] hover:border-[#5a3c9f]/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:-translate-y-0.5 p-2 font-semibold text-[#5a3c9f] rounded-full transition-all"
            >
              Contatos
            </a>
          </div>
        </div>
      </main>
    </motion.section>
  );
};
