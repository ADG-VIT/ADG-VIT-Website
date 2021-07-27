import React from "react";
import { HeadingContainer, Heading, Link as SeeAll, CardWrapper, CardImage, CardFooter, Title, About } from "./ProjectItems";
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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
    <CardWrapper>
        <CardImage src="Frame 212.svg"></CardImage>
        <CardFooter>
            <Title>ADG VIT App</Title>
            <About>An App for all things Apple Developers Group</About>
        </CardFooter>
    </CardWrapper>
    <CardWrapper>
        <CardImage src="Frame 212.svg"></CardImage>
        <CardFooter>
            <Title>ADG VIT App</Title>
            <About>An App for all things Apple Developers Group</About>
        </CardFooter>
    </CardWrapper>
    <CardWrapper>
        <CardImage src="Frame 212.svg"></CardImage>
        <CardFooter>
            <Title>ADG VIT App</Title>
            <About>An App for all things Apple Developers Group</About>
        </CardFooter>
    </CardWrapper>
    <CardWrapper>
        <CardImage src="Frame 212.svg"></CardImage>
        <CardFooter>
            <Title>ADG VIT App</Title>
            <About>An App for all things Apple Developers Group</About>
        </CardFooter>
    </CardWrapper>
    
    </Carousel>
    </React.Fragment>
  );
}
