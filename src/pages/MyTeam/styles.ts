import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas: "HEADER" "BODY";
`;
export const Headers = styled.div`
    grid-area: HEADER;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "tittle info";
`;
export const TitleTeam = styled.span`
  grid-area: tittle;

  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.045em;

  color: #000000;
`;
export const TitleTeamInfo = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  /* identical to box height */
  text-transform: uppercase;

  color: #000000;
`;
export const TeamInfo = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: #000000;
`;
export const TeamMembers = styled.div``;
export const PartnerPhoto = styled.img``;
export const PName = styled.p``;
