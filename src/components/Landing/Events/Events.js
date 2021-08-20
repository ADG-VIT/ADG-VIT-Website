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
  SecTextWrap
} from "./EventsElements";
import Fade from "react-reveal/Fade";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setEvent } from "../../../store/Event";

export default function Events(props) {
  const [isUpdated, setIsUpdated] = React.useState({ value: false, data: {} });
  const data = useSelector((state) => state.event.event);
  const dispatch = useDispatch();
  if (data !== null && !isUpdated.value) {
    setIsUpdated({
      value: true,
      data: data,
    });
    props.ready();
  } else if (!isUpdated.value) {
    Axios.get("https://backend-events.herokuapp.com/events?q=4").then(
      (data) => {
        setIsUpdated({ value: true, data: data.data });
        props.ready();
        dispatch(setEvent({ payload: data.data }));
      }
    );
  }
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
  return (
    <div style={{ margin: "3rem 0" }}>
      <EventsContainer>
        <Fade bottom distance="25%" duration={500}>
          <HeadingContainer>
            <Heading>Our Events</Heading>
            <SeeAll to="/events/">See All</SeeAll>
          </HeadingContainer>
        </Fade>
        {isUpdated.value && (
          <CardsWrap>
            {isUpdated.data.map((i, ind) => {
              if (ind === 0) {
                if(window.innerWidth > 400){
                  return (
                    <MainEventCard key={i._id}>
                    <Fade bottom distance="25%" duration={500} delay={0} fraction={0.1}>
                    <MainEventImage>
                      <img src={i.posterURL} alt="Event" />
                    </MainEventImage>
                    <MainTextWrap>
                      <MainEventHeading>{i.name}</MainEventHeading>
                      <MainEventDescription>{i.info}</MainEventDescription>
                      <MainEventDate>{convertTime(i.date)}</MainEventDate>
                    </MainTextWrap>
                    </Fade>
                  </MainEventCard>
                );
                } else {
                  return (
                    <Fade bottom distance="25%" duration={500} delay={0} fraction={0.1}>
                    <MainEventCard key={i._id}>
                    <MainEventImage>
                      <img src={i.posterURL} alt="Event" />
                    </MainEventImage>
                    <MainTextWrap>
                      <MainEventHeading>{i.name}</MainEventHeading>
                      <MainEventDescription>{i.info}</MainEventDescription>
                      <MainEventDate>{convertTime(i.date)}</MainEventDate>
                    </MainTextWrap>
                  </MainEventCard>
                    </Fade>
                );
                }
              } else {
                return (
                    <Fade bottom distance="25%" duration={500} delay={ind*150} fraction={0.1}>
                  <SecEventCard key={i._id}>
                    <SecEventImage>
                      <img src={i.posterURL} alt="Event" />
                    </SecEventImage>
                    <SecTextWrap>
                      <SecEventHeading>{i.name}</SecEventHeading>
                      <SecEventDescription>{i.info}</SecEventDescription>
                      <SecEventDate>{convertTime(i.date)}</SecEventDate>
                    </SecTextWrap>
                  </SecEventCard>
                    </Fade>
                );
              }
            })}
          </CardsWrap>
        )}
        <CardsWrap></CardsWrap>
      </EventsContainer>
    </div>
  );
}
