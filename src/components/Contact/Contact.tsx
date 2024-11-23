import { FC } from "react";
export const Contact: FC = () => {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-full md:flex-col">
          <img
            src="images/Contact.png"
            alt="children"
            className="w-[55%] h-auto  md:w-full md:h-auto object-cover"
          />
          <div className="w-[45%] md:w-full h-full bg-primary flex flex-col justify-center md:h-[611px]">
            <div className="self-center text-left md:text-center flex md:items-center flex-col">
              <h1 className="text-white leading-[58px] font-medium text-6xl w-[505px] md:w-full mb-8 sm:text-5xl">
                Informações de <span className="text-[#19DCFE]">contato</span>
              </h1>
              <div className="mt-6">
                <iframe
                  className="rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116971.7048809252!2d-46.96230411529542!3d-23.627068214254216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54c0bbbef41d%3A0x120241151e72583b!2sPosto%20De%20Saude%20Sao%20Judas%20%2C%20Taboao%20Da%20Serra!5e0!3m2!1spt-BR!2sbr!4v1731972602467!5m2!1spt-BR!2sbr"
                  width="410"
                  height="100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="font-light text-white text-[15px] mt-[20px] leading-[30px]">
                <span className="font-bold">Telefone:</span> (11) 4433-6767
                <br />
                <span className="font-bold">E-mail: </span>
                contato@hospitalinfantilsaojudastadeu.com
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray- absolute inset-x-0 bottom-0 h-[50%] z-0" />
      </div>
    </div>
  );
};
