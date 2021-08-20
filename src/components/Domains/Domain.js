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
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
    <Fade bottom>
      <Main>Our Domains</Main>
      </Fade>
      <CardHolder>
        <Fade bottom distance="25%" duration={500} delay={0}><DomainCard key={0} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={100}><DomainCard key={1} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={200}><DomainCard key={2} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={300}><DomainCard key={3} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={400}><DomainCard key={4} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={500}><DomainCard key={5} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
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
        <Fade bottom distance="25%" duration={500} delay={0}><DomainCard key={0} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={100}><DomainCard key={1} name="Android Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="android" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={200}><DomainCard key={2} name="Android Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="android" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={300}><DomainCard key={3} name="iOS Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="ios" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={400}><DomainCard key={4} name="iOS Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="ios" /></Fade>
        <Fade bottom distance="25%" duration={500} delay={500}><DomainCard key={5} name="Design Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="design" /></Fade>
      </CardHolder>
    </React.Fragment>
  );
};

export { DomainLanding };
