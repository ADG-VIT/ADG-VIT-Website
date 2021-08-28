import { React, useState } from "react";
import { ReactComponent as ADGLogo } from "./assets/AdgLogo.svg";
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
  SelectWrap,
  OptionWrap,
} from "./SignUpElements";
import { IoMdArrowDropdown } from "react-icons/io";

const SignUp = () => {
  const [selectOption, setSelectOption] = useState(false);
  const [optionOpen, setOptionOpen] = useState(false);

  const selectHandle = () => {
    setOptionOpen(!optionOpen);
    const element = document.getElementById("selected-option");
    if (element.value === "Yes") {
      setSelectOption(true);
    } else {
      setSelectOption(false);
    }
  };

  const optionClose = (e) => {
    setOptionOpen(false);
  };

  const yesClicked = () => {
    const element = document.getElementById("selected-option");
    element.innerHTML = "Yes";
    element.value = "Yes";
    element.style.color = "var(--text)";
    selectHandle();
  };

  const noClicked = () => {
    const element = document.getElementById("selected-option");
    element.innerHTML = "No";
    element.value = "No";
    element.style.color = "var(--text)";
    selectHandle();
  };

  return (
    <>
      <SignUpContainer>
        <AdgLogoWrap>
          <ADGLogo />
        </AdgLogoWrap>
        <SignUpHeader>Create an Account</SignUpHeader>
        <LoginText>
          Already Have an Account? <span>Login</span>
        </LoginText>
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
            <Label>Are you from VIT Vellore?</Label>
            <SelectWrap>
              <InputSelection
                id="selected-option"
                onClick={selectHandle}
                value="No"
                required
              >Yes/No</InputSelection>
              <IoMdArrowDropdown id="down-arrow" onClick={selectHandle} />
              <OptionWrap
                style={{
                  display: optionOpen ? "flex" : "none",
                }}
                onMouseLeave={optionClose}
              >
                <InputOption onClick={yesClicked} id="option-yes">
                  Yes
                </InputOption>
                <InputOption onClick={noClicked} id="option-no">
                  No
                </InputOption>
              </OptionWrap>
            </SelectWrap>
          </div>
          <div>
            <Label>Registration Number/Uni</Label>
            {selectOption ? (
              <Input
                type="text"
                placeholder="Enter your Registration Number"
                required
              />
            ) : (
              <Input
                type="text"
                placeholder="Enter your Registration Number"
                disabled
              />
            )}
          </div>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </Form>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
