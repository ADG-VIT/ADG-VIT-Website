import React from "react";
import DomainCard from "./DomainCards";
import {
  CardHolder,
  Main,
  HeadingLanding,
  Link,
  HeadingContainer,
} from "./DomainElements";
import Fade from "react-reveal/Fade";
import axios from "axios";

const Domain = () => {
  const [domains, setDomains] = React.useState([]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("https://backend-events.herokuapp.com/domain").then((res) => {
      setDomains(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      <Fade bottom>
        <Main>Our Domains</Main>
      </Fade>
      <CardHolder>
        {domains.map((domain, index) => {
          return (
            <Fade bottom distance="25%" duration={500} delay={index*100}>
              <DomainCard
                key={index}
                name={domain.name}
                info={domain.description}
                icon={domain.logo}
              />
            </Fade>
          );
        })}
        {/* <Fade bottom distance="25%" duration={500} delay={0}>
          <DomainCard
            key={0}
            name="iOS Domain"
            info="When elegance meets class and creativity and technology meets innovation, it creates a path for the future."
            icon="ios"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={100}>
          <DomainCard
            key={1}
            name="Android Domain"
            info="Did you just go to “About Phone” and tap on the build number seven times?"
            icon="android"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={200}>
          <DomainCard
            key={2}
            name="Web Domain"
            info="Experience a perception of the services and products offered. Centre of digitalization."
            icon="web"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={300}>
          <DomainCard
            key={3}
            name="ML Domain"
            info="Data is the new science, the ability to automate tasks without being programmed explicitly is the new scientific skill."
            icon="ml"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={400}>
          <DomainCard
            key={4}
            name="Design Domain"
            info="Things aren’t always #000 and #FFF. The function of design is letting design function."
            icon="design"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={500}>
          <DomainCard
            key={5}
            name="Marketing Domain"
            info="The Science of Sales lies in the “Magic of Marketing”! Building Networks is an asset and we believe in building long-term assets."
            icon="marketing"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={600}>
          <DomainCard
            key={6}
            name="Sponsorship Domain"
            info="Our Sponsors understand us and professionally mentor our shared goals. Most importantly, they provide us with opportunities that help us grow."
            icon="sponsorship"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={700}>
          <DomainCard
            key={7}
            name="Logistics Domain"
            info="Leaders win through Logistics. Behind every great leader, there was an even greater logistician."
            icon="logistics"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={800}>
          <DomainCard
            key={7}
            name="Media Domain"
            info="An opportunity to integrate the power of ideas with the power of images."
            icon="media"
          />
        </Fade> */}
      </CardHolder>
    </React.Fragment>
  );
};

export default Domain;

const DomainLanding = () => {
  const [domains, setDomains] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://backend-events.herokuapp.com/domain").then((res) => {
      setDomains(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      <HeadingContainer>
        <HeadingLanding>Our Domains</HeadingLanding>
        <Link to="/domains/">See All</Link>
      </HeadingContainer>
      <CardHolder>
      {domains.map((domain, index) => {
          if(index < 4){
            return (
              <Fade bottom distance="25%" duration={500} delay={index*100}>
                <DomainCard
                  key={index}
                  name={domain.name}
                  info={domain.description}
                  icon={domain.logo}
                />
              </Fade>
            );
          }
        })}
        {/* <Fade bottom distance="25%" duration={500} delay={0}>
          <DomainCard
            key={0}
            name="iOS Domain"
            info="When elegance meets class and creativity and technology meets innovation, it creates a path for the future."
            icon="web"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={100}>
          <DomainCard
            key={1}
            name="Android Domain"
            info="Did you just go to “About Phone” and tap on the build number seven times?"
            icon="web"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={200}>
          <DomainCard
            key={2}
            name="Web Domain"
            info="Experience a perception of the services and products offered. Centre of digitalization."
            icon="web"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={300}>
          <DomainCard
            key={3}
            name="ML Domain"
            info="Data is the new science, the ability to automate tasks without being programmed explicitly is the new scientific skill."
            icon="web"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={400}>
          <DomainCard
            key={4}
            name="Design Domain"
            info="Things aren’t always #000 and #FFF. The function of design is letting design function."
            icon="web"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={500}>
          <DomainCard
            key={5}
            name="Marketing Domain"
            info="The Science of Sales lies in the “Magic of Marketing”! Building Networks is an asset and we believe in building long-term assets."
            icon="web"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={600}>
          <DomainCard
            key={6}
            name="Sponsorship Domain"
            info="Our Sponsors understand us and professionally mentor our shared goals. Most importantly, they provide us with opportunities that help us grow."
            icon="web"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={700}>
          <DomainCard
            key={7}
            name="Logistics Domain"
            info="Leaders win through Logistics. Behind every great leader, there was an even greater logistician."
            icon="web"
          />
        </Fade>
        <Fade bottom distance="25%" duration={500} delay={800}>
          <DomainCard
            key={7}
            name="Media Domain"
            info="An opportunity to integrate the power of ideas with the power of images."
            icon="web"
          />
        </Fade> */}
      </CardHolder>
    </React.Fragment>
  );
};

export { DomainLanding };
