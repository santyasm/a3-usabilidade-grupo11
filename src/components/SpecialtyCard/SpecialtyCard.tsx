import { FC } from "react";

interface Props {
  img: string;
  title: string;
  onClick: () => void;
}

export const SpecialtyCard: FC<Props> = ({ img, title, onClick }) => {
  return (
    <button
      className="w-[256px] h-[495px] relative flex flex-col justify-center"
      onClick={onClick}
    >
      <div className="bg-[#0C1439] w-full h-full absolute opacity-50" />
      <img src={img} alt="" className="w-full h-[495px] object-cover" />

      <h1 className="text-white absolute self-center font-medium text-[32px] md:text-[12px]">
        {title}
      </h1>
    </button>
  );
};
