import { Code2, House, Info, Mail } from "lucide-react";

const linksNav = [
  {
    link: "#",
    icon: House,
    label: "Início",
  },
  {
    link: "#about",
    icon: Info,
    label: "Sobre mim",
  },
  {
    link: "#projects",
    icon: Code2,
    label: "Projetos",
  },
  {
    link: "#contact",
    icon: Mail,
    label: "Contatos",
  },
];

export const Navbar = () => {
  return (
    <header className="top z-20 fixed flex gap-4 items-center justify-center p-8 w-full ">
      <nav className="flex items-center md:w-3/5 justify-center  backdrop-blur-sm py-2 text-black font-semibold rounded-full shadow-md/20">
        <ul className="flex items-center gap-2 md:gap-20">
          {linksNav.map((linkNav, key) => (
            <a
              key={key}
              href={linkNav.link}
              className="flex items-center gap-2 hover:bg-(--dark-blue-gray) hover:text-white p-2 transition-all rounded-full"
            >
              <linkNav.icon />
              <p className="hidden md:block">{linkNav.label}</p>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};
