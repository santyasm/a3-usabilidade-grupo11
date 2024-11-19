import { FC } from "react";

interface SpecialtyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  img: string;
}

export const SpecialtyModal: FC<SpecialtyModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  img,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white shadow-lg w-[55%] flex justify-between relative md:flex-col">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-400 font-bold text-xl"
          onClick={onClose}
          aria-label="Fechar"
        >
          ✕
        </button>

        <img src={img} alt={title} className="w-full h-auto object-cover" />

        <div className="flex flex-col items-center justify-center w-[100%] px-8">
          <h1 className="text-4xl font-semibold text-primary mb-8 md:text-[32px] text-center">
            {title}
          </h1>
          <p className="text-gray-500 text-center font-light">{description}</p>
        </div>
      </div>
    </div>
  );
};
