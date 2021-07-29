import React from "react";
import { HeadingContainer, Heading, Link as SeeAll} from "./ProjectElements";
import Card from "./Card"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 620 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
      items: 1
    }
  };


export default function Projects() {
  return (
    <React.Fragment>
        <HeadingContainer>
      <Heading>Our Projects</Heading>
      <SeeAll to="/projects/all" >See All</SeeAll>
    </HeadingContainer>
    <Carousel responsive={responsive}>
    <Card key={0} imageSrc="Frame 212.svg" title="ADG VIT App" about="An App for all things Apple Developers Group" />
    <Card key={1} imageSrc="Frame 212.svg" title="ADG VIT App" about="An App for all things Apple Developers Group" />
    <Card key={2} imageSrc="Frame 212.svg" title="ADG VIT App" about="An App for all things Apple Developers Group" />
    <Card key={3} imageSrc="Frame 212.svg" title="ADG VIT App" about="An App for all things Apple Developers Group" />
    <Card key={4} imageSrc="Frame 212.svg" title="ADG VIT App" about="An App for all things Apple Developers Group" />
    </Carousel>
    </React.Fragment>
  );
}
