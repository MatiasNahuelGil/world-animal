import styled from "styled-components";
import InfoContainer from "../InfoContainer/InfoContainer";

const Section = styled.section`
  padding: 2em;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  gap: 2em;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.figure`
  width: 50%;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const SectionWithImage = ({ imageSrc, imageAlt, title, children, reverse = false }) => {
  return (
    <Section reverse={reverse}>
      <ImageContainer>
        <Image src={imageSrc} alt={imageAlt} />
      </ImageContainer>
      <InfoContainer title={title} border="border">
        {children}
      </InfoContainer>
    </Section>
  );
};

export default SectionWithImage;