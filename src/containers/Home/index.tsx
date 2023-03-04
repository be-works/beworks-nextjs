import SHome, { SBanner } from "./style";
import Typical from "react-typical";
import { Container } from "styled-bootstrap-grid";
import LetterB1 from "src/components/Icons/LetterB1";
import LetterB2 from "src/components/Icons/LetterB2";
import LetterE1 from "src/components/Icons/LetterE1";
import LetterE2 from "src/components/Icons/LetterE2";
import LetterK1 from "src/components/Icons/LetterK1";
import LetterK2 from "src/components/Icons/LetterK2";
import LetterO1 from "src/components/Icons/LetterO1";
import LetterO2 from "src/components/Icons/LetterO2";
import LetterR1 from "src/components/Icons/LetterR1";
import LetterR2 from "src/components/Icons/LetterR2";
import LetterW1 from "src/components/Icons/LetterW1";
import LetterW2 from "src/components/Icons/LetterW2";

export default function Home() {
  return (
    <SHome>
      <SBanner>
        <div className="banner">
          <div className="banner_content">
            <Container>
              <h1>Hi,</h1>
              <h1>I am Bework</h1>
              <Typical
                steps={[
                  "Developer",
                  4000,
                  "Web Designer",
                  4000,
                  "Graphic Designer",
                  4000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </Container>
          </div>

          <div className="banner_letters_wrap">
            <div className="banner_letters banner_letters_1">
              <div className="banner_letters-container">
                <LetterB1 />
                <LetterB2 />
              </div>
            </div>
            <div className="banner_letters banner_letters_2">
              <div className="banner_letters-container">
                <LetterE1 />
                <LetterE2 />
              </div>
            </div>
            <div className="banner_letters banner_letters_3">
              <div className="banner_letters-container">
                <LetterW1 />
                <LetterW2 />
              </div>
            </div>
            <div className="banner_letters banner_letters_4">
              <div className="banner_letters-container">
                <LetterO1 />
                <LetterO2 />
              </div>
            </div>
            <div className="banner_letters banner_letters_5">
              <div className="banner_letters-container">
                <LetterR1 />
                <LetterR2 />
              </div>
            </div>
            <div className="banner_letters banner_letters_6">
              <div className="banner_letters-container">
                <LetterK1 />
                <LetterK2 />
              </div>
            </div>
          </div>
        </div>
      </SBanner>
    </SHome>
  );
}
