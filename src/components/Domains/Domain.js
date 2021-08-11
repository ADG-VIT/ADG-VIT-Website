import React from "react";
import DomainCard from "./DomainCards";
import {
  CardHolder,
  Main,
  HeadingLanding,
  Link,
  HeadingContainer,
} from "./DomainElements";

const Domain = () => {
  return (
    <React.Fragment>
      <Main>Our Domains</Main>
      <CardHolder>
        <DomainCard key={0} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web" />
        <DomainCard key={1} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web"/>
        <DomainCard key={2} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web"/>
        <DomainCard key={3} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web"/>
        <DomainCard key={4} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web"/>
        <DomainCard key={5} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web"/>
        <DomainCard key={6} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web"/>
        <DomainCard key={7} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web"/>
        <DomainCard key={8} name="Web Domain" info="Apple Developers Group conducts a 48 hour long hackathon " icon="web"/>
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
