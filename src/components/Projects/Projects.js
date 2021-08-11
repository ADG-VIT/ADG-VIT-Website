import React from "react";
import { HeadingContainer, Heading, Link as SeeAll } from "./ProjectElements";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from "axios";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1440, min: 1130 },
    items: 3,
  },
  smallTablet: {
    breakpoint: { max: 1130, min: 778 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 778, min: 0 },
    items: 1,
  },
};

export default function Projects() {
  const [isUpdated, setIsUpdated] = React.useState({ value: false, data: {} });
  React.useEffect(() => {
    Axios.get("https://backend-events.herokuapp.com/projects?q=0").then(
      (value) => {
        setIsUpdated({ value: true, data: value });
      }
    );
  }, []);
  return (
    <React.Fragment>
      <HeadingContainer>
        <Heading>Our Projects</Heading>
        <SeeAll to="/projects/">See All</SeeAll>
      </HeadingContainer>
      {isUpdated.value && (
        <Carousel responsive={responsive}>
          {isUpdated.data.data.map((i, ind) => {
            return (
              <Card
                key={ind}
                imageSrc={i.thumbnail}
                title={i.title}
                about={i.shortDescription}
              />
            );
          })}
        </Carousel>
      )}
    </React.Fragment>
  );
}
