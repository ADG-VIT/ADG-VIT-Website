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
import SignInModal from "../SignIn/Signin";
import Axios from "axios";
import Banner from "./Banner";

const SignUp = () => {
  const [selectOption, setSelectOption] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [optionOpen, setOptionOpen] = useState(false);
  const [name, setName] = useState("");
  const [uni, setUni] = useState("VIT");
  const [regno, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState({ value: false, data: "", type: "" });

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
    if (password !== confirm) {
      setError({
        value: true,
        data: "Passwords do not match",
        type: "password",
      });
      return;
    }
    Axios.post("https://backend-events.herokuapp.com/users/register", {
      name: name,
      email: email,
      phone: "9347250045",
      password: password,
      university: uni,
    })
      .then((data) => {
        if (data.status === 200) {
          setError({ value: true, data: data.data.message, type: "confirm" });
        }
      })
      .catch((err) => {
        setError({
          value: true,
          data: err.response.data.message,
          type: "confirm",
        });
      });
  };
  const style = error.value ? { border: "2px solid red" } : null;
  return (
    <>
      {error.value ? <Banner message={error.data} /> : null}
      <SignUpContainer>
        <AdgLogoWrap>
          <ADGLogo />
        </AdgLogoWrap>
        <SignUpHeader>Create an Account</SignUpHeader>
        <LoginText>
          Already Have an Account?{" "}
          <span onClick={() => handleOpen()}>Login</span>
        </LoginText>
        <Form>
          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="Enter your Full Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <Label>E-Mail ID</Label>
            <Input
              type="email"
              placeholder="Enter your E-Mail ID"
              required
              onChange={(e) => {
                setEmail(e.target.value);
                error.value &&
                  error.type === "email" &&
                  setError({ value: false, data: "", type: "" });
              }}
              value={email}
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Minimum 8 Characters"
              required
              onChange={(e) => {
                setPassword(e.target.value);
                error.type === "password" &&
                  setError({ value: false, data: "", type: "" });
              }}
              value={password}
              style={() => {
                if (error.type === "password") return style;
              }}
            />
          </div>
          <div>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="Confirm your Password"
              required
              onChange={(e) => {
                setConfirm(e.target.value);
                error.type === "password" &&
                  setError({ value: false, data: "", type: "" });
              }}
              value={confirm}
              style={() => {
                if (error.type === "password") return style;
              }}
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
                  onChange={(e) => {
                    setRegNo(e.target.value);
                    error.value &&
                      error.type === "reg" &&
                      setError({ value: false, data: "", type: "" });
                  }}
                  value={regno}
                />
              </>
            ) : (
              <>
                <Label>University name</Label>
                <Input
                  type="text"
                  placeholder="Enter your University Name"
                  required
                  onChange={(e) => setUni(e.target.value)}
                />
              </>
            )}
          </div>
          <SubmitButton type="submit" onClick={submitHandler}>
            Sign Up
          </SubmitButton>
        </Form>
      </SignUpContainer>
      {isOpen && <SignInModal onClose={handleClose} />}
    </>
  );
};

export default SignUp;
