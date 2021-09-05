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
  OptionWrap
} from "./SignUpElements";
import { IoMdArrowDropdown } from "react-icons/io";
import SignInModal from "../SignIn/Signin";
import Axios from "axios";
import Banner from "./Banner";

const SignUp = () => {
  const [selectOption, setSelectOption] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [optionOpen, setOptionOpen] = useState(false);
  const [name, setName] = useState("");
  const [regno, setRegNo] = useState("20BCT0092");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [banner,setBanner] = useState({ value: false, data: "" });


  const handleOpen = () => {
    setIsOpen(true);
  };
  
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      setIsOpen(false);
    }
  };

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

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("https://backend-events.herokuapp.com/users/register", {
      name: name,
      email: email,
      phone: "9347250045",
      password: password,
      university: "VIT"
    }).then((data) => {
      if (data.status === 200) {
        setBanner({value: true, data: data.data.message});
      }
    }).catch((err) => {
      console.log(err.response)
    })
  }

  return (
    <>
    {banner.value ? <Banner message={banner.data} /> : null}
      <SignUpContainer>
        <AdgLogoWrap>
          <ADGLogo />
        </AdgLogoWrap>
        <SignUpHeader>Create an Account</SignUpHeader>
        <LoginText>
          Already Have an Account? <span onClick={() => handleOpen()} >Login</span>
        </LoginText>
        <Form>
          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter your Full Name" required onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div>
            <Label>E-Mail ID</Label>
            <Input type="email" placeholder="Enter your E-Mail ID" required onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Minimum 8 Characters"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="Confirm your Password"
              required
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
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
              >
                Yes/No
              </InputSelection>
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
            {selectOption ? (
              <>
                <Label>Registration Number</Label>
                <Input
                  type="text"
                  placeholder="Enter your Registration Number"
                  required
                />
              </>
            ) : (
              <>
                <Label>University name</Label>
                <Input
                  type="text"
                  placeholder="Enter your University Name"
                  required
                />
              </>
            )}
          </div>
          <SubmitButton type="submit" onClick={submitHandler} >Sign Up</SubmitButton>
        </Form>
      </SignUpContainer>
      {isOpen && <SignInModal onClose={handleClose} />}
    </>
  );
};

export default SignUp;