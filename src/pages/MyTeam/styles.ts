import { Props } from "react";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas: "HEADER" "BODY";
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: "HEADER" "BODY";
  }
`;
export const HeaderLeft = styled.div`
  grid-area: info;
  @media (max-width: 768px) {
    margin: 1em;    
  }
`;
export const Headers = styled.div`
  margin-top: 2em;
  grid-area: HEADER;
  display: grid;
  grid-template-columns: 45% 50%;
  grid-template-areas: "tittle info";
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas: "tittle" "info";
  }
`;
export const TitleTeam = styled.p`
  grid-area: tittle;

  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  padding-left: 6em;
  letter-spacing: -0.045em;

  color: #000000;
  @media (max-width: 768px) {
    padding-left: 0.3em;
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.045em;

    color: #000000;
  }
`;
export const TitleTeamInfo = styled.p`
  font-family: "Poppins";
  margin-top: 2em;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  /* identical to box height */
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding: 0.5em;
  }
  color: #000000;
`;
export const TeamInfo = styled.span`
  font-family: "Poppins";
  padding-right: 17em;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  @media (max-width: 768px) {
    padding: 1em;
  }
  color: #000000;
`;
export const TeamMembers = styled.div`
  grid-area: BODY;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10% 15%;
  @media (max-width: 768px) {
    margin: 1% 1%;
    padding: 0.5em;
  }
`;

export const Partner = styled.div<Margin>`
  margin-top: ${(props) => props.margin}px;
  padding-bottom: 30px;
  position: relative;
`;

interface Margin {
  margin: number;
}
export const PartnerPhoto = styled.img`
  width: 80%;

  position: relative;
`;
export const PName = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  /* identical to box height */

  color: #000000;
`;
export const Role = styled.div`
  text-transform: uppercase;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  position: absolute;
  /* identical to box height */
  text-transform: uppercase;

  color: #000000;
  top: 3vw;
  transform: rotate(90deg);

  right: 0vw;
`;
