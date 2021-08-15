import React from "react";
import {
  Wrapper,
  Box,
  Image,
  Stuff,
  HeadingHolder,
  Heading1,
  Heading4,
  Form,
  Input1,
  Input2,
  ImageDiv,
  Forgot,
  Button,
  Join1,
  Join2,
  Join
} from "./ModalElements";
import Image1 from "./Saly-16.svg";

const Modal = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

  return (
    <Wrapper onClick={props.onClose} id="wrapper">
      <Box onClick={null}>
        <ImageDiv>
          <Image src={Image1} alt="Random Image" />
        </ImageDiv>
        <Stuff>
          <HeadingHolder>
            <Heading1>Hello Again!</Heading1>
            <Heading4>Login to access your account</Heading4>
          </HeadingHolder>
          <Form>
            <Input1 type="email" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input2 type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Forgot to="/">Forgot Password?</Forgot>
            <Button>Login</Button>
            <Join>
                <Join1>Not a member?</Join1><Join2 to="/">Register Now</Join2>
            </Join>
          </Form>
        </Stuff>
      </Box>
    </Wrapper>
  );
};

export default Modal;