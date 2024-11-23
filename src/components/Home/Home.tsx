import { FC } from "react";
import { Navbar } from "..";

export const Home: FC = () => {
  return (
    <section id="home" className="bg-primary relative w-full">
      <Navbar />

      <div className="flex justify-center mt-8">
        <div className="relative z-10 flex items-center justify-between bg-gray-10 pl-[60px] w-[70%] md:py-20 md:flex-col md:items-center md:px-4 sm:w-full">
          <div className="flex flex-col gap-8">
            <h1 className="text-primary leading-[150%] font-semibold text-[36px] w-[340px] uppercase md:text-[20px]">
              Bem vindo ao Hospital Infantil São Judas Tadeu
            </h1>
            <p className="max-w-[350px] font-light text-gray-500">
              O Hospital Infantil São Judas Tadeu é um lugar de excelência em
              saúde infantil, com um atendimento completo, equipe especializada,
              e uma infraestrutura de excelência.
            </p>
          </div>
          <img
            src="images/home.png"
            alt="children"
            className="w-full sm:max-w-full sm:h-auto max-w-[686px] md:mt-10"
          />
        </div>

        <div className="bg-gray-50 absolute inset-x-0 bottom-0 h-[50%] z-0" />
      </div>
    </section>
  );
};
