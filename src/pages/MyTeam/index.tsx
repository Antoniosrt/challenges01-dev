import styled from "styled-components";
import { Grid, PartnerPhoto, PName, TeamInfo, TeamMembers, TitleTeam, TitleTeamInfo,Headers } from "./styles";
export default function MyTeam() {
  return (
    <div>
      <Grid>
        <Headers>
            <TitleTeam>The creative crew</TitleTeam>
            <TitleTeamInfo>Who we are</TitleTeamInfo>
            <TeamInfo>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
            </TeamInfo>
        </Headers>
        <TeamMembers>
          <PartnerPhoto></PartnerPhoto>
          <PName></PName>
        </TeamMembers>
      </Grid>
    </div>
  );
}
