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
  Join,
} from "./ModalElements";
import Image1 from "./Saly-16.svg";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/Auth";
import { Spinner } from "./Spinner";
import Banner from "./Banner";
import { useHistory } from "react-router-dom"

const Modal = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hasSubmit, setHasSubmit] = React.useState(false);
  const [hasError, setHasError] = React.useState({ value: false, data: "" });
  const [loggedIn, setHasLoggedIn] = React.useState(false);
  let history = useHistory();

  const handleSubmit = () => {
    setHasSubmit(true);
    if (email === "" || password === "") {
      setHasError(true);
      alert("Invalid Username or Password");
      setHasSubmit(false);
      return;
    }
    Axios.post("https://backend-events.herokuapp.com/users/signin", {
      email: email,
      password: password,
    })
      .then((data) => {
        if (data.status === 200) {
          setHasLoggedIn(true);
          dispatch(setToken({ payload: data.data.Token }));
          setTimeout(() => {
            history.push("/");
            props.onClose();
          }, 1000);
        }
      })
      .catch((err) => {
        setHasError({ value: true, data: err.response.data.message });
      })
      .finally(() => setHasSubmit(false));
  };
  const handleForgot = () => {
    alert("Forgot");
  };
  const style = { border: "2px solid red" };

  return (
    <Wrapper onClick={props.onClose} id="wrapper">
      {hasError.value ? <Banner message={hasError.data} /> : null}
      {loggedIn ? <Banner message={`Authenticated as ${email}`} /> : null}
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
            <Input1
              type="email"
              placeholder="Username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                hasError.value && setHasError(false);
              }}
              style={hasError.value ? style : null}
            />
            <Input2
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                hasError.value && setHasError(false);
              }}
              style={hasError.value ? style : null}
            />
            <Forgot onClick={handleForgot}>Forgot Password?</Forgot>
            <Button onClick={handleSubmit}>
              {hasSubmit ? <Spinner /> : "Login"}
            </Button>
            <Join>
              <Join1>Not a member?</Join1>
              <Join2 onClick={() => {history.push("/register")}} id="wrapper" >Register Now</Join2>
            </Join>
          </Form>
        </Stuff>
      </Box>
    </Wrapper>
  );
};

export default Modal;
