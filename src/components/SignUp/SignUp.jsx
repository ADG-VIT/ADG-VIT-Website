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
} from "./SignUpElements";

const SignUp = () => {
  const [selectOption, setSelectOption] = useState(false);

  const selectHandle = () => {
    const element = document.getElementById("selected-option");
    if (element.value === "Yes") {
      setSelectOption(true);
    } else {
      setSelectOption(false);
    }
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
                required
              >
                <InputOption value="" disabled selected hidden>
                  Yes/No
                </InputOption>
                <InputOption value="Yes">Yes</InputOption>
                <InputOption value="No">No</InputOption>
              </InputSelection>
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
