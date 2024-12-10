
import SectionWithImage from "../../components/SectionWithImage/SectionWithImage";
import TitleSection from "../../components/TitleSection/TitleSection";
import Gallery from "../../components/Gallery/Gallery";
import AnimalGroup from "../../components/AnimalGroup/AnimalGroup";
import { ANIMAL__GROUP } from "../../data/AnimalGroup";
import { HOME_SECTIONS, TITLES} from "../../data/HomeSection";


export default function Home() {
  return (
    <>
      

      {HOME_SECTIONS.map((section, index) => (
        <SectionWithImage
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          title={section.title}
          reverse={section.reverse}
        >
          {section.content}
        </SectionWithImage>
      ))}

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
