import { ButtonHTMLAttributes, FC } from "react";
import { IconType } from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  Icon: IconType;
}

export const PrimaryButtonXL: FC<Props> = ({ title, Icon }) => {
  return (
    <button className="flex items-center gap-6 bg-primary text-blue-900 rounded-md text-2xl w-[30vw] font-medium bg-slate-50 h-32 pr-8 shadow-md">
      <div className="bg-slate-200 h-full rounded-e-full flex items-center justify-center px-8">
        <Icon size={44} />
      </div>
      <h1>{title}</h1>
    </button>
  );
};
