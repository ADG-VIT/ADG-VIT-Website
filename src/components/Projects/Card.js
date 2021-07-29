import {
  CardWrapper,
  CardImage,
  CardFooter,
  Title,
  About,
} from "./ProjectElements";

const Card = (props) => {
  return (
    <CardWrapper>
      <CardImage src={props.imageSrc}></CardImage>
      <CardFooter>
        <Title>{props.title}</Title>
        <About>{props.about}</About>
      </CardFooter>
    </CardWrapper>
  );
};


export default Card;