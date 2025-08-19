import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
    return <section id="contact" className="min-h-screen flex items-center justify-center relative py-20">
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400
            bg-clip-text text-transparent text-center">Meus contatos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {/* Github */}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Github: </h3>
                        <p><a href="https://github.com/martinaNasc04" target="_blank" className="font-semibold text-blue-400 hover:text-purple-400 transition-colors"> <i className="fa-brands fa-github"></i> martinaNasc04</a></p>
                    </div>
                    {/* Linkedin */}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">  Linkedin: </h3>
                        <p><a href="https://www.linkedin.com/in/martinamirandanascimento" target="_blank" className="font-semibold text-blue-400 hover:text-purple-400 transition-colors"> <i className="fa-brands fa-linkedin"></i> Martina Miranda Nascimento</a></p>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}