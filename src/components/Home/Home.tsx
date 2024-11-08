import { FC } from "react";
import { PrimaryButtonXL } from "../PrimaryButtonXL";
import { RiHealthBookLine } from "react-icons/ri";
import { GiTransparentTubes } from "react-icons/gi";

export const Home: FC = () => {
  return (
    <div className="flex items-center justify-center mt-20 sm:px-0 px-32">
      <div className="flex flex-row md:flex-col items-center gap-10 lg:gap-20">
        <img
          src="images/home.png"
          alt="children"
          className="w-full sm:max-w-full sm:h-auto max-w-[686px]"
        />
        <div className="flex flex-col sm:gap-4 gap-6 w-full max-w-[300px]">
          <PrimaryButtonXL
            title="Marque uma consulta"
            Icon={RiHealthBookLine}
          />

          <PrimaryButtonXL
            title="Marque seus exames"
            Icon={GiTransparentTubes}
          />
        </div>
      </div>
    </div>
  );
};
