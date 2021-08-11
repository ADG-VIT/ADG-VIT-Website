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
import image from "./assets/event.png";

export default function Events() {
  return (
    <div style={{ margin: "5rem 0" }}>
      <EventsContainer>
        <HeadingContainer>
          <Heading>Our Events</Heading>
          <SeeAll to="/events/">See All</SeeAll>
        </HeadingContainer>
        <CardsWrap>
          <MainEventCard>
            <MainEventImage>
              <img src={image} alt="Event" />
            </MainEventImage>
            <MainTextWrap>
              <MainEventHeading>Recruitment</MainEventHeading>
              <MainEventDescription>
                Apple Developers Group conducts a 48 hour long hackathon that
                encourages young developers to come up with scintillating
                technical solutions
              </MainEventDescription>
              <MainEventDate>Jan 20, 2021</MainEventDate>
            </MainTextWrap>
          </MainEventCard>

          <SecEventCard>
            <SecEventImage>
              <img src={image} alt="Event" />
            </SecEventImage>
            <SecTextWrap>
              <SecEventHeading>Recruitment</SecEventHeading>
              <SecEventDescription>
                Apple Developers Group conducts a 48 hour long hackathon that
                encourages young developers to come up with scintillating
                technical solutions
              </SecEventDescription>
              <SecEventDate>Jan 20, 2021</SecEventDate>
            </SecTextWrap>
          </SecEventCard>

          <SecEventCard>
            <SecEventImage>
              <img src={image} alt="Event" />
            </SecEventImage>
            <SecTextWrap>
              <SecEventHeading>Recruitment</SecEventHeading>
              <SecEventDescription>
                Apple Developers Group conducts a 48 hour long hackathon that
                encourages young developers to come up with scintillating
                technical solutions
              </SecEventDescription>
              <SecEventDate>Jan 20, 2021</SecEventDate>
            </SecTextWrap>
          </SecEventCard>

          <SecEventCard>
            <SecEventImage>
              <img src={image} alt="Event" />
            </SecEventImage>
            <SecTextWrap>
              <SecEventHeading>Recruitment</SecEventHeading>
              <SecEventDescription>
                Apple Developers Group conducts a 48 hour long hackathon that
                encourages young developers to come up with scintillating
                technical solutions
              </SecEventDescription>
              <SecEventDate>Jan 20, 2021</SecEventDate>
            </SecTextWrap>
          </SecEventCard>
        </CardsWrap>
      </EventsContainer>
    </div>
  );
}
