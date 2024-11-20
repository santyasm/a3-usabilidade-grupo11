import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <nav className="mt-8 flex space-x-[110px] text-white justify-center py-[60px] font-light">
      <a href="#home">Home</a>
      <a href="#quem-somos">Quem somos nós</a>
      <a href="#planos">Planos e convênios</a>
      <a href="#especialidades">Especialidades</a>
    </nav>
  );
};
