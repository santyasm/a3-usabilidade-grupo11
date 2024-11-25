import { FC } from "react";
export const About: FC = () => {
  return (
    <section id="quem-somos" className="relative py-40 w-full">
      <div className="flex justify-center">
        <div className="relative z-10 flex items-center justify-between sm:flex-col sm:gap-10">
          <div className="flex flex-col gap-8 mr-40 sm:text-center sm:items-center sm:justify-center sm:mr-0">
            <h1 className="text-primary leading-[96%] font-semibold text-7xl md:text-5xl sm:text-center">
              Quem somos
            </h1>
            <p className="w-[440px] font-light text-gray-500 sm:w-[80%]">
              O Hospital Infantil Esperança é uma instituição especializada no
              cuidado de crianças e adolescentes, situada no coração da cidade.
              Fundado com o propósito de oferecer um ambiente acolhedor e
              humanizado, o hospital conta com uma equipe multidisciplinar
              altamente capacitada, dedicada ao bem-estar físico e emocional de
              cada paciente.
            </p>
          </div>
          <img
            src="images/About.png"
            alt="children"
            className="w-[444px] h-auto sm:w-[90%]"
          />
        </div>

        <div className="bg-gray- absolute inset-x-0 bottom-0 h-[50%] z-0" />
      </div>
    </section>
  );
};
