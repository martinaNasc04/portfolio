import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id='projects' className='min-h-screen flex items-center justify-center relative py-20'>
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400
            bg-clip-text text-transparent text-center">Projetos</h2>

                {/* Projetos */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">NotesApp</h3>
                        <p className="text-gray-400 mb-4">Um aplicativo web para guardar notas</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Django"].map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">{tech}</span>
                            ))}
                        </div>

                        {/* links */}
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/martinaNasc04/notesApp"
                                className="font-semibold text-blue-400 hover:text-purple-400 transition-colors">Ver projeto</a>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}