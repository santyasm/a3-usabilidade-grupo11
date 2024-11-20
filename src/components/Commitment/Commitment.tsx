import { FC } from "react";

export const Commitment: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-primary text-white px-4 text-center">
    
      <h1 className="text-4xl font-bold mb-6">
        Compromisso com a <span className="text-[#19DCFE]">vida</span>
      </h1>

      <p className="text-lg max-w-3xl">
        No <b>Hospital Infantil São Judas Tadeu</b>, estamos profundamente
        comprometidos com o cuidado da saúde e com a preservação do meio ambiente.
        Priorizamos práticas sustentáveis em nossos processos diários, desde a
        gestão responsável de resíduos até a economia de recursos naturais. Essa
        abordagem não apenas reduz nosso impacto ambiental, mas também reforça nosso
        compromisso com a responsabilidade social e a construção de um futuro mais
        saudável e sustentável para todos.
      </p>

      <nav className="mt-8 flex space-x-6 ">
        <a href="#home" className="hover:text-white text-[#19DCFE]">
          Home
        </a>
        <a href="#quem-somos" className="hover:text-white">
          Quem somos nós
        </a>
        <a href="#planos" className="hover:text-white">
          Planos e convênios
        </a>
        <a href="#especialidades" className="hover:text-white">
          Especialidades
        </a>
      </nav>
    </section>
  );
};
