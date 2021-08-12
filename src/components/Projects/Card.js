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
      <div style={{"overflow": "hidden", "height": "20rem"}} >
      <CardImage src={props.imageSrc}></CardImage>
      </div>
      <CardFooter>
        <Title>{props.title}</Title>
        <About>{props.about}</About>
      </CardFooter>
    </CardWrapper>
  );
};


export default Card;