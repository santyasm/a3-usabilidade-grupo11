import { FC } from "react";
import { agreements } from "./utils";

export const Agreements: FC = () => {
  return (
    <section id="planos" className="py-40">
      <div className="flex flex-col items-center justify-center text-center my-15">
        <div>
          <h1 className="text-primary font-bold text-7xl sm:text-5xl leading-[106%] mb-8">
            Planos e Convênios
          </h1>
        </div>
        <div className="flex justify-center gap-[98px] mt-[47px] sm:flex-col items-center">
          {agreements.map((agreement, index) => (
            <img
              key={index}
              src={agreement.src}
              alt={agreement.alt}
              className="w-[150px] h-auto sm:w-[70%]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
