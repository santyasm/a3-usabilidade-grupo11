import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <nav className="mt-8 flex flex-wrap justify-center gap-6 space-x-[100px] md:space-x-[16px] sm:gap-0 text-white py-6 font-light overflow-clip sm:text-[12px]">
      <a href="#home" className="text-center">
        Home
      </a>
      <a href="#quem-somos" className="text-center">
        Quem somos nós
      </a>
      <a href="#planos" className="text-center">
        Planos e convênios
      </a>
      <a href="#especialidades" className="text-center">
        Especialidades
      </a>
    </nav>
  );
};
