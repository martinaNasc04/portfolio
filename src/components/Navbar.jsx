import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    // check if the menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return <nav className="fixed top-0 z-40 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg
    border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">

                    DEV <span className="text-cyan-500">.tech</span>

                </a>
                {/* Icon Menu Mobile */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() =>
                    setMenuOpen(prev => !prev)}>
                    &#9776;
                </div>
                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">Início</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projetos</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a>
                </div>
            </div>
        </div>
    </nav>

}