import SpeciesCard from "../SpeciesCard/SpeciesCard";

const AnimalGroup = ({ animals }) => {
  return (
    <div className="animalGroup__container">
      {animals.map((animal, index) => (
        <figure className="card__container" key={index}>
          <SpeciesCard
            name={animal.name}
            description={animal.description}
            image={animal.image}
          />
        </figure>
      ))}
    </div>
  );
};

export default AnimalGroup;