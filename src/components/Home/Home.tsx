import { FC } from "react";

export const Home: FC = () => {
  return (
    <div className="bg-primary relative">
      <div className="flex items-center justify-between h-28"></div>

      <div className="flex justify-center">
        <div className="relative z-10 flex items-center justify-between bg-gray-10 pl-[60px] w-[70%]">
          <div className="flex flex-col gap-8">
            <h1 className="text-primary leading-[48px] font-semibold text-[36px] w-[340px] uppercase">
              Bem vindo ao Hospital Infantil São Judas Tadeu
            </h1>
            <p className="w-[340px] font-light text-gray-500">
              O Hospital Infantil São Judas Tadeu é um lugar de excelência em
              saúde infantil, com um atendimento completo, equipe especializada,
              e uma infraestrutura de excelência.
            </p>
          </div>
          <img
            src="images/home.png"
            alt="children"
            className="w-full sm:max-w-full sm:h-auto max-w-[686px]"
          />
        </div>

        <div className="bg-gray-50 absolute inset-x-0 bottom-0 h-[50%] z-0" />
      </div>
    </div>
  );
};
