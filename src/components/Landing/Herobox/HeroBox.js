import React from "react";
import {
	About,
	ADGLogoWrap,
	HeroBoxContainer,
	JoinUsButton,
	MainHeader,
	Tagline,
} from "./HeroBoxElements";
import AdgLogo from "./assets/adglogo.png";

const HeroBox = () => {
	return (
		<>
			<HeroBoxContainer>
				<ADGLogoWrap>
					<img src={AdgLogo} alt="ADG Logo" />
				</ADGLogoWrap>
				<MainHeader>Apple Developers Group</MainHeader>
				<Tagline>Developing your Dream</Tagline>
				<About>
					ADGVIT is a student community at VIT that brings together
					like-minded individuals who are interested in Developing
					their Dream. The group provides a platform for students to
					explore their interests while collaborating with others on
					projects. The aim of the group is to enable students to
					develop themselves as developers and provide them with all
					the tools they need for success.
				</About>
				<JoinUsButton to="/register">Join us</JoinUsButton>
			</HeroBoxContainer>
		</>
	);
};

export default HeroBox;
