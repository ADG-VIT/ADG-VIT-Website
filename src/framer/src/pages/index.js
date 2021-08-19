import React from "react";

import {
  FadeInUpBox,
  StaggerWrap,
} from "../../ui";


const listContent = [
  "Lorem ipsum",
  "Dolor sit amet",
  "Consectetur",
  "Adipisicing elit",
  "Soluta quis",
  "Voluptatibus"
];

export default function App() {
  return (
          <React.Fragment>
            <StaggerWrap>
            <ul>
              {listContent.map((item, key) => (
                <FadeInUpBox key={key}>
                  <li>{item}</li>
                </FadeInUpBox>
              ))}
            </ul>
          </StaggerWrap>
          <StaggerWrap>
              {[...Array(6).keys()].map((item, key) => (
                <FadeInUpBox key={key}>
                  <p>{item + 1}</p>
                </FadeInUpBox>
              ))}
          </StaggerWrap>
          </React.Fragment>
  );
}

