import { FC } from "react";
export const Contact: FC = () => {
  return (
    <div className=" relative mb-10">
      <div className="flex items-center justify-between h-0"></div>
      <div className="flex justify-center">
        <div className="relative z-10 flex items-center justify-between ">
          <div>
            <img
              src="images/Contact.png"
              alt="children"
              className="w-[866px] h-[611px]"
            />
          </div>
          <div className="w-[595px] h-[611px] bg-primary flex flex-col justify-center">
            <div className="ml-20 text-left">
              <h1 className="text-white leading-[48px] font-medium text-[60px] w-[505px]">
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
                ></iframe>
              </div>
              <p className="w-[340px] font-light text-white text-[15px] mt-[20px] leading-[30px]">
  
                <span className="font-bold">Telefone:</span> (11) 4433-6767
                <br />
                <span className="font-bold">E-mail: </span>
                write@saifeehospital.com
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray- absolute inset-x-0 bottom-0 h-[50%] z-0" />
      </div>
    </div>
  );
};
