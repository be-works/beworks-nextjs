import { SBanner } from "./style";
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

export default function Banner() {
  return (
    <SBanner>
      {/* <div className="banner">
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
          <div className="banner_letters">
            <div className="banner_letters_1">
              <LetterB1 className="letter_item letter_item_B letter_item_B1" />

              <LetterB2 className="letter_item letter_item2 letter_item_B letter_item_B2" />
            </div>
          </div>
          <div className="banner_letters">
            <div className="banner_letters_2">
              <LetterE1 className="letter_item letter_item_E letter_item_E1" />

              <LetterE2 className="letter_item letter_item2 letter_item_E letter_item_E2" />
            </div>
          </div>
          <div className="banner_letters">
            <div className="banner_letters_3">
              <LetterW1 className="letter_item letter_item_W letter_item_W1" />

              <LetterW2 className="letter_item letter_item2 letter_item_W letter_item_W2" />
            </div>
          </div>
          <div className="banner_letters">
            <div className="banner_letters_4">
              <LetterO1 className="letter_item letter_item_O letter_item_O1" />

              <LetterO2 className="letter_item letter_item2 letter_item_O letter_item_O2" />
            </div>
          </div>
          <div className="banner_letters">
            <div className="banner_letters_5">
              <LetterR1 className="letter_item letter_item_R letter_item_R1" />

              <LetterR2 className="letter_item letter_item2 letter_item_R letter_item_R2" />
            </div>
          </div>
          <div className="banner_letters">
            <div className="banner_letters_6">
              <LetterK1 className="letter_item letter_item_K letter_item_K1" />

              <LetterK2 className="letter_item letter_item2 letter_item_K letter_item_K2" />
            </div>
          </div>
        </div>

        <div className="test">
          <svg viewBox="0 0 960 300">
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="80%">
                BEWORK
              </text>
              <text text-anchor="middle" x="52%" y="80%">
                BEWORK
              </text>
            </symbol>

            <g className="g-ants">
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
            </g>
          </svg>
        </div>
      </div> */}
      <ul>
        <li>
          <input type="checkbox" />
          <div>B</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>E</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>W</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>O</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>R</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>K</div>
        </li>
      </ul>
    </SBanner>
  );
}
