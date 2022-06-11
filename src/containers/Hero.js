// Styled Components
import { HeroBackground } from "../components/Hero.styled";
import { MainContainer } from "../components/MainContainer.styled";
import { H1 } from "../components/H1.styled";
import { ScrollAnimation } from "../components/ScrollAnimation.styled";

export default function Hero() {
  return (
    <HeroBackground>
      <MainContainer style={{ paddingBottom: "20%", height: "90vh" }}>
        <H1>Space Knowledge</H1>
      </MainContainer>
      <ScrollAnimation />
    </HeroBackground>
  );
}
