import styled from "styled-components";

export const TittleNotFound = styled.h4`
  padding: 0.5em;
  margin: 0.5em;
  font-family: "Inconsolata";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  text-transform: uppercase;
  color: #333333;
`;
export const TextTittle = styled.p`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  margin-top: 0;
  font-size: 64px;
  line-height: 95px;
  letter-spacing: 0.035em;
  /* Gray 1 */
  color: #333333;
`;
export const EspantalhoImg = styled.img`
  width: 70%;
  height: auto;
  grid-area: img;
  margin-left: 5%;
`;
export const TextInfo = styled.p`
  padding-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 3em;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.035em;
  /* Gray 2 */
  color: #4f4f4f;
  width: 80%;
`;

export const Container = styled.div`
  margin: 50px;
  //height: 100vh;
`;
export const TextDiv = styled.div`
  grid-area: text;
`;
export const Row = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  height: 80vh;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "img text";
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas: "img" "text";
  }
`;
export const HomePageBackButton = styled.a`
  background-color: #333333;
  border: 1px solid #f5f5f5;
  color: #f5f5f5;
  padding: 1em 3em 1em 3em;
  height: auto;

  
`;


