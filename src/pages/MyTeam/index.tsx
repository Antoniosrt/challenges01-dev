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
interface Props{
  margin:number,
  role:string,
  nome:string,
  image:string
}
const PartTeam:React.FC<Props> = ({margin,role,nome,image}) => {
  return (
    <div>
      <Partner margin={margin}>
        <PartnerPhoto src={image} />
        <PName>{nome}</PName>
        <Role>{role}</Role>
      </Partner>
    </div>
  );
};

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
              innovative individuals working in various locations from the
              world.
            </TeamInfo>
          </HeaderLeft>
        </Headers>
        <br></br>
        <TeamMembers>
          <PartTeam
            role="Product owner"
            image={Photo01}
            nome="Bill Mahoney"
            margin={0}
          />
          <PartTeam
            role="Art director"
            image={Photo02}
            nome="Saba Cabrera"
            margin={100}
          />

          <PartTeam
            role="UX Designer"
            image={Photo03}
            nome="Saba Cabrera"
            margin={0}
          />

          <PartTeam
            role="UX Designer"
            image={Photo04}
            nome="Skylah Lu"
            margin={0}
          />
          <PartTeam
            role="Developer"
            image={Photo05}
            nome="Griff Richards"
            margin={100}
          />
          <PartTeam
            role="DEverloper"
            image={Photo06}
            nome="Stan John"
            margin={0}
          />
        </TeamMembers>
      </Grid>
    </div>
  );
}
