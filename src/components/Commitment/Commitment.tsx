import { FC } from "react";
import { Navbar } from "..";

export const Commitment: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center  bg-primary text-white text-center pt-40">
      <h1 className="font-medium mb-8 text-6xl w-[25%]">
        Compromisso com a <span className="text-[#19DCFE]">vida</span>
      </h1>

      <p className="text-xl font-light w-[70%] text-[#e3e3e3] text-center leading-8">
        No Hospital Infantil São Judas Tadeu, estamos profundamente
        comprometidos com o cuidado da saúde e com a preservação do meio
        ambiente. Priorizamos práticas sustentáveis em nossos processos diários,
        desde a gestão responsável de resíduos até a economia de recursos
        naturais. Essa abordagem não apenas reduz nosso impacto ambiental, mas
        também reforça nosso compromisso com a responsabilidade social e a
        construção de um futuro mais saudável e sustentável para todos.
      </p>

      <Navbar />
    </section>
  );
};
