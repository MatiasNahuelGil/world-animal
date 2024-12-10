
import TitleSection from "../../components/TitleSection/TitleSection";
import Gallery from "../../components/Gallery/Gallery";
import AnimalGroup from "../../components/AnimalGroup/AnimalGroup";
import { ANIMAL__GROUP } from "../../data/AnimalGroup";
import { TITLES } from "../../data/HomeSection";
import { SliderContainer } from "../../components/SliderContainer/SliderContainer";



export default function Home() {
  return (
    <>
       <SliderContainer/>
      {TITLES.map((title, index) => (
        <section key={index}>
          <TitleSection title={title} />
          {title === "Increíbles paisajes" && <Gallery />}
          {title === "Diversidad de animales" && <AnimalGroup animals={ANIMAL__GROUP} />}
        </section>
      ))}
    </>
  );
}
