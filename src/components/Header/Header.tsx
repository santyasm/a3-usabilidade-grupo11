import { FaPhone } from "react-icons/fa6";

export const Header = () => {
  return (
    <div className="flex px-[20%] items-center bg-white min-h-20 justify-between py-8">
      <div className="flex items-center gap-4">
        <img
          src="icons/logo.svg"
          alt="children"
          className="w-10 sm:max-w-full sm:h-auto"
        />
        <h1 className="text-primary text-2xl md:text-xl sm:text-sm font-semibold">
          Hospital Infantil são Judas Tadeu
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <FaPhone className="text-secondary text-xl" />

        <h1 className="text-primary text-xl sm:text-sm font-semibold">
          (11) 4433-6767
        </h1>
      </div>
    </div>
  );
};
