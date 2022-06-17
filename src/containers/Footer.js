import { FooterDiv } from "../components/FooterDiv.styled";
import { H3 } from "../components/H3.styled";

export default function Footer() {
  return (
    <FooterDiv>
      <div style={{ display: "block" }}>
        <H3 style={{ fontSize: "24px" }}>Links</H3>
        <a href="https://www.diogodeese.com" target="blank">
          Visit my Portfolio
        </a>
      </div>
    </FooterDiv>
  );
}
