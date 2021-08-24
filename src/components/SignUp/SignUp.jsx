import React, { useEffect, useState } from "react";

import AdgLogoDarkM from "./assets/AdgLogoDarkM.png";
import AdgLogoLightM from "./assets/AdgLogoLightM.png";

import {
  AdgLogoWrap,
  Input,
  InputSelection,
  Label,
  LoginText,
  SignUpContainer,
  SignUpHeader,
  Form,
  InputOption,
  SubmitButton,
} from "./SignUpElements";

const SignUp = () => {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if(document.documentElement.style.getPropertyValue('--mode') === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  },[darkMode]);

  return (
    <>
      <SignUpContainer>
        <AdgLogoWrap>
          <img src={darkMode ? AdgLogoDarkM : AdgLogoLightM} alt="ADG Logo" />
        </AdgLogoWrap>
        <SignUpHeader>Create an Account</SignUpHeader>
        <LoginText>Already Have an Account? <span>Login</span></LoginText>
        <Form>
          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter your Full Name" required />
          </div>
          <div>
            <Label>E-Mail ID</Label>
            <Input type="email" placeholder="Enter your E-Mail ID" required />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Minimum 8 Characters"
              required
            />
          </div>
          <div>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="Confirm your Password"
              required
            />
          </div>
          <div>
            <Label>Are you From VIT Vellore?</Label>
            <InputSelection type="select" placeholder="Yes/No" required>
              <InputOption>Yes</InputOption>
              <InputOption>No</InputOption>
            </InputSelection>
          </div>
          <div>
            <Label>Registration Number/Uni</Label>
            <Input type="text" placeholder="Confirm your Password" required />
          </div>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </Form>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
