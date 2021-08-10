import React from "react";
import TeamCard from "./TeamCard";
import { CardHandler } from "./TeamsElements";
import {
  HeadingContainer,
  Heading,
  Link as SeeAll,
} from "../Projects/ProjectElements";
import Axios from "axios";

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
  return (
    <React.Fragment>
      <HeadingContainer>
        <Heading>Our Team</Heading>
      </HeadingContainer>
      <CardHandler>
        {isUpdated.value &&
          isUpdated.data.data.map((i, ind) => {
            return (
              <TeamCard
                key={ind}
                name={i.Name}
                desig={i.Designation}
                pic={i.Pic}
              />
            );
          })}
      </CardHandler>
    </React.Fragment>
  );
};

export { FullTeams };
