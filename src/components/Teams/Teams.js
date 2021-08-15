import React from "react";
import TeamCard from "./TeamCard";
import { CardHandler, Title } from "./TeamsElements";
import {
  HeadingContainer,
  Heading,
  Link as SeeAll,
} from "../Projects/ProjectElements";
import Axios from "axios";
import {Spinner, SpinnerBox} from "../../containers/spinner"
import Fade from "react-reveal/Fade"

const Teams = () => {
  const [isUpdated, setIsUpdated] = React.useState({ value: false, data: {} });
  React.useEffect(() => {
    Axios.get("https://backend-events.herokuapp.com/board").then((data) => {
      setIsUpdated({
        value: true,
        data: data,
      });
    });
  }, []);
  return (
    <React.Fragment>
      <HeadingContainer>
        <Heading>Our Team</Heading>
        <SeeAll to="/team">See All</SeeAll>
      </HeadingContainer>
      <CardHandler>
        {isUpdated.value &&
          isUpdated.data.data.map((i, ind) => {
            if (ind < 8) {
              return (
                <TeamCard
                  key={ind}
                  name={i.Name}
                  desig={i.Designation}
                  pic={i.Pic}
                  linked={i.LinkedIn}
                  git={i.Github}
                  email={i.Email}
                />
              );
            } else {
              return null;
            }
          })}
      </CardHandler>
    </React.Fragment>
  );
};

export default Teams;

const FullTeams = () => {
  const [isUpdated, setIsUpdated] = React.useState({ value: false, data: {} });
  React.useEffect(() => {
    Axios.get("https://backend-events.herokuapp.com/board").then((data) => {
      setIsUpdated({
        value: true,
        data: data,
      });
    });
  }, []);
  const style = isUpdated.value ? null : {"height": "10vh", "overflow": "hidden"}
  return (
    <div style={style}>
    {!isUpdated.value && <SpinnerBox><Spinner /></SpinnerBox>}
      <Fade bottom>
        <Title>Our Team</Title>
      </Fade>
      <CardHandler>
        {isUpdated.value &&
          isUpdated.data.data.map((i, ind) => {
            return (
              <Fade bottom>
              <TeamCard
                key={ind}
                name={i.Name}
                desig={i.Designation}
                pic={i.Pic}
                linked={i.LinkedIn}
                git={i.Github}
                email={i.Email}
              />
              </Fade>
            );
          })}
      </CardHandler>
    </div>
  );
};

export { FullTeams };
