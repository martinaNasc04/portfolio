import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const frontendSkills = ["React", "TailwindCSS"]
    const backendSkills = ["Python", "Django"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400
            bg-clip-text text-transparent text-center">Sobre mim</h2>
                {/* Habilidades */}
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-2">
                        Desenvolvedora web com foco em front-end e um pouco de experiência em back-end.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-lg font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-lg font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Educação */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> &#128214; Educação: </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">

                            <li>
                                <strong>Análise e Desenvolvimento de Sistemas </strong>  - IFSP Campus Votuporanga - <em>2018-2021</em>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </RevealOnScroll>
    </section>
}