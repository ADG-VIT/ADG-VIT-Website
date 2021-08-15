import React from "react";
import DomainCard from "./DomainCards";
import {
  CardHolder,
  Main,
  HeadingLanding,
  Link,
  HeadingContainer,
} from "./DomainElements";
import Fade from "react-reveal/Fade"

const Domain = () => {
  return (
    <React.Fragment>
    <Fade bottom>
      <Main>Our Domains</Main>
      </Fade>
      <CardHolder>
        <Fade bottom><DomainCard key={0} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom><DomainCard key={1} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom><DomainCard key={2} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom><DomainCard key={3} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom><DomainCard key={4} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom><DomainCard key={5} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
      </CardHolder>
    </React.Fragment>
  );
};

export default Domain;

const DomainLanding = () => {
  return (
    <React.Fragment>
      <HeadingContainer>
        <HeadingLanding>Our Domains</HeadingLanding>
        <Link to="/domains/">See All</Link>
      </HeadingContainer>
      <CardHolder>
        <DomainCard key={0} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" />
        <DomainCard key={1} name="Android Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="android" />
        <DomainCard key={2} name="Android Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="android" />
        <DomainCard key={3} name="iOS Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="ios" />
        <DomainCard key={4} name="iOS Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="ios" />
        <DomainCard key={5} name="Design Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="design" />
      </CardHolder>
    </React.Fragment>
  );
};

export { DomainLanding };
