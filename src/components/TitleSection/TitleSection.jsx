import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
 text-align: center;
`
const Underline = styled.div`
  border: 3px solid var(--gold);
  width: 200px;
`


export default function TitleSection({title}) {
  return (
    <>
    <TitleContainer>
      <Title>{title}</Title>
      <Underline/>
    </TitleContainer>
      
    </>
  );
}
