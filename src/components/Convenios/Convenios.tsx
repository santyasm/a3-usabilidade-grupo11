import { FC } from "react";

export const Convenios: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-15">
      <div>
        <h1 className="text-primary leading-[48px] font-bold text-[64px] mb-8">
          Planos e Convênios
        </h1>
      </div>
      <div className="flex justify-center gap-[98px] mt-[47px]">
        <img
          src="images/Planos/primeira.png"
          alt="Amil"
          className="w-[150px] h-auto"
        />
        <img
          src="images/Planos/segunda.png"
          alt="Bradesco"
          className="w-[150px] h-auto"
        />
        <img
          src="images/Planos/terceira.png"
          alt="Unimed"
          className="w-[150px] h-auto"
        />
        <img
          src="images/Planos/quarta.png"
          alt="Hapvida"
          className="w-[150px] h-auto"
        />
      </div>
    </div>
  );
};
