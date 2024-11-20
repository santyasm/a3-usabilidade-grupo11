import { FC, useState } from "react";
import { SpecialtyCard, SpecialtyModal } from "..";
import { specialties } from "./utils";

interface Specialty {
  id: string;
  label: string;
  img: string;
  description: string;
}

export const Specialties: FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickSpecialtyCard = (specialty: any) => {
    setSelectedSpecialty(specialty);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpecialty(null);
  };

  return (
    <section
      id="especialidades"
      className="flex flex-col items-center pt-20 pb-40"
    >
      <h1 className="text-primary leading-[48px] font-bold text-[64px] mb-8">
        Especialidades
      </h1>
      <p className="max-w-[550px] font-light text-gray-500 text-center">
        Nossos médicos são altamente capacitados para cuidar dos seus filhos com
        excelência.
      </p>

      <div className="flex gap-7 w-full px-4 mt-14 justify-center sm:flex-col items-center">
        {specialties.map((specialty) => (
          <SpecialtyCard
            key={specialty.id}
            title={specialty.label}
            img={specialty.img}
            onClick={() => onClickSpecialtyCard(specialty)}
          />
        ))}
      </div>

      {selectedSpecialty && (
        <SpecialtyModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedSpecialty?.label}
          description={selectedSpecialty?.description}
          img={selectedSpecialty?.img}
        />
      )}
    </section>
  );
};
