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
  Icon
} from "./ModalElements";
import Image1 from "./Saly-16.svg";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/Auth";
import { Spinner } from "./Spinner";
import Banner from "./Banner";
import { useHistory } from "react-router-dom";
import {ImCross} from "react-icons/im"

const Modal = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hasSubmit, setHasSubmit] = React.useState(false);
  const [hasError, setHasError] = React.useState({ value: false, data: "" });
  const [loggedIn, setHasLoggedIn] = React.useState(false);
  const [forgot, setForgot] = React.useState(false);
  const [sentEmail, setSentEmail] = React.useState(false);
  let history = useHistory();

  const handleSubmit = () => {
    if(!forgot){
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
          dispatch(setToken({ payload: data.data.token }));
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
    } else {
      setHasSubmit(true);
    if (email === "") {
      setHasError(true);
      alert("Invalid Email");
      setHasSubmit(false);
      return;
    }
    Axios.post("https://backend-events.herokuapp.com/users/change/password", {
      email: email
    })
      .then((data) => {
        if (data.status === 200) {
          setSentEmail(true);
        }
      })
      .catch((err) => {
        setHasError({ value: true, data: err.response.data.message });
      })
      .finally(() => setHasSubmit(false));
    }
  };
  const handleForgot = () => {
    setForgot((prev) => !prev);
  };
  const style = { border: "2px solid red" };

  return (
    <Wrapper onClick={props.onClose} id="wrapper">
      {hasError.value ? <Banner message={hasError.data} /> : null}
      {loggedIn ? <Banner message={`Authenticated as ${email}`} /> : null}
      {sentEmail ? <Banner message={"Please check your email for a verification link"} /> : null}
      <Box onClick={null}>
      <Icon onClick={() => props.onClose()}>
        <ImCross />
      </Icon>
        <ImageDiv>
          <Image src={Image1} alt="Random Image" />
        </ImageDiv>
        <Stuff>
          <HeadingHolder>
            <Heading1>
              {!forgot ? "Hello Again!" : "Forgot password?"}
            </Heading1>
            <Heading4>
              {!forgot ? "Login to access your account" : "We got your back"}
            </Heading4>
          </HeadingHolder>
          <Form>
            <Input1
              type="email"
              placeholder={!forgot ? "Username" : "Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                hasError.value && setHasError(false);
              }}
              style={hasError.value ? style : null}
            />
            {!forgot && <Input2
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                hasError.value && setHasError(false);
              }}
              style={hasError.value ? style : null}
            />}
            <Forgot onClick={handleForgot}>
              {!forgot ? "Forgot Password?" : "Sign in"}
            </Forgot>
            <Button onClick={handleSubmit}>
              {hasSubmit ? <Spinner /> : (!forgot ? "Login" : "Submit")}
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
