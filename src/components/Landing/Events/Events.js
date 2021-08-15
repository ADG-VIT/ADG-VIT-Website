import React from "react";
import { Heading, HeadingContainer } from "../../Projects/ProjectElements";
import { SeeAll } from "../Partners/PartnersElements";
import {
  CardsWrap,
  EventsContainer,
  MainEventCard,
  MainEventDate,
  MainEventDescription,
  MainEventHeading,
  MainEventImage,
  MainTextWrap,
  SecEventCard,
  SecEventDate,
  SecEventDescription,
  SecEventHeading,
  SecEventImage,
  SecTextWrap,
} from "./EventsElements";
import Fade from "react-reveal/Fade";
import Axios from "axios";

export default function Events(props) {
  const [isUpdated, setIsUpdated] = React.useState({ value: false, data: {} });
  React.useEffect(() => {
    Axios.get("https://backend-events.herokuapp.com/events?q=4").then(
      (data) => {
        handleUpdate(data);
      }
    );
  }, []);
  const convertTime = (time) => {
    var a = new Date(time * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    return date + " " + month + " " + year;
  };
  const handleUpdate = (data) => {
    setIsUpdated({value: true, data: data});
    props.ready();
  }
  return (
    <Fade bottom>
      <div style={{ margin: "5rem 0" }}>
        <EventsContainer>
          <HeadingContainer>
            <Heading>Our Events</Heading>
            <SeeAll to="/events/">See All</SeeAll>
          </HeadingContainer>
          {isUpdated.value && (
            <CardsWrap>
              {isUpdated.data.data.map((i, ind) => {
                if (ind === 0) {
                  return (
                    <MainEventCard>
                      <MainEventImage>
                        <img src={i.posterURL} alt="Event" />
                      </MainEventImage>
                      <MainTextWrap>
                        <MainEventHeading>{i.name}</MainEventHeading>
                        <MainEventDescription>{i.info}</MainEventDescription>
                        <MainEventDate>{convertTime(i.date)}</MainEventDate>
                      </MainTextWrap>
                    </MainEventCard>
                  );
                } else {
                  return (
                    <SecEventCard>
                      <SecEventImage>
                        <img src={i.posterURL} alt="Event" />
                      </SecEventImage>
                      <SecTextWrap>
                        <SecEventHeading>{i.name}</SecEventHeading>
                        <SecEventDescription>{i.info}</SecEventDescription>
                        <SecEventDate>{convertTime(i.date)}</SecEventDate>
                      </SecTextWrap>
                    </SecEventCard>
                  );
                }
              })}
            </CardsWrap>
          )}
          <CardsWrap></CardsWrap>
        </EventsContainer>
      </div>
    </Fade>
  );
}
