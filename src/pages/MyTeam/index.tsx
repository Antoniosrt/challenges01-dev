import styled from "styled-components";
import Photo01 from "../../imgs/photo1.png";
import Photo02 from "../../imgs/photo2.png";
import Photo03 from "../../imgs/photo3.png";
import Photo04 from "../../imgs/photo4.png";
import Photo05 from "../../imgs/photo5.png";
import Photo06 from "../../imgs/photo6.png";
import {
  Grid,
  PartnerPhoto,
  PName,
  TeamInfo,
  TeamMembers,
  TitleTeam,
  TitleTeamInfo,
  Headers,
  HeaderLeft,
  Partner,
  Role,
} from "./styles";
export default function MyTeam() {
  return (
    <div>
      <Grid>
        <Headers>
          <TitleTeam>The creative crew</TitleTeam>
          <HeaderLeft>
            <TitleTeamInfo>Who we are</TitleTeamInfo>
            <TeamInfo>
              We are team of creatively diverse. driven.
              <br />
              innovative individuals working in various locations from the
              world.
            </TeamInfo>
          </HeaderLeft>
        </Headers>
        <TeamMembers>
          <Partner margin={0}>
          <Role>Product owner</Role>
            <PartnerPhoto src={Photo01} />
            <PName>Bill Mahoney</PName>
            
          </Partner>

          <Partner margin={100}>
            <PartnerPhoto src={Photo02} />
            <PName>Saba Cabrera</PName>
            <Role>Art director</Role>
          </Partner>

          <Partner margin={0}>
            <PartnerPhoto src={Photo03} />
            <PName>Tech Lead</PName>
            <Role>UX Designer</Role>
          </Partner>

          <Partner margin={0}>
            <PartnerPhoto src={Photo04} />
            <PName>Skylah Lu</PName>
            <Role>Product owner</Role>
          </Partner>

          <Partner margin={100}>
            <PartnerPhoto src={Photo05} />
            <PName>Griff Richards</PName>
            <Role>Developer</Role>
          </Partner>

          <Partner margin={0}>
            <PartnerPhoto src={Photo06} />
            <PName>Stan John</PName>
            <Role>DEverloper</Role>
          </Partner>
        </TeamMembers>
      </Grid>
    </div>
  );
}
