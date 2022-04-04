import styled from "styled-components";
import FooterComponent from "../../components/Footer";
import Scarecrow from "../../imgs/Scarecrow.png";
import { TittleNotFound, Container, Row, EspantalhoImg, TextInfo, TextTittle, HomePageBackButton,TextDiv } from "./styles";
export default function Error404() {

    return (
        <div>
            <TittleNotFound>404 NOT FOUND</TittleNotFound>
            <Container>
                <Row>
                    <EspantalhoImg src={Scarecrow} />
                    <TextDiv>
                        <TextTittle>
                            I have bad news for you
                        </TextTittle>
                        <TextInfo>
                            The page you are looking for might be removed or is temporarily unavailable
                        </TextInfo>
                        <HomePageBackButton>
                            BACK TO HOMEPAGE
                        </HomePageBackButton>
                    </TextDiv>
                </Row>
                <br/>
               <FooterComponent></FooterComponent>

            </Container>

        </div>
    );
}	