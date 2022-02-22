import React, { useState, useRef } from "react";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavMenu,
	NavItem,
	MobileIcon,
	NavBtn,
	NavBtnLink,
	NavUser,
	NavDropdown,
	NavDropLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { useClickAway } from "react-use";
import userIcon from "./assets/user-icon.svg";
import { ReactComponent as ADGLogo } from "./assets/AdgLogo.svg";
import SignInModal from "../../SignIn/Signin";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../../store/Auth";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggle }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [isHeroSection, setIsHeroSection] = useState(true);
	const [isOpen, setIsOpen] = React.useState(false);
	var token = useSelector((state) => state.counter.leAuthorisationToken);
	const dispatch = useDispatch();
	if (token === null) {
		if (localStorage.getItem("leAuthorisationToken") !== null) {
			dispatch(
				setToken({
					payload: localStorage.getItem("leAuthorisationToken"),
				})
			);
		}
	}
	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};
	const toggleIsHeroSection = () => {
		if (
			window.scrollY <= window.innerHeight &&
			window.location.pathname === "/"
		) {
			setIsHeroSection(true);
		} else {
			setIsHeroSection(false);
		}
	};
	window.addEventListener("scroll", toggleIsHeroSection);

	const closeDropdown = () => {
		setDropdownOpen(false);
	};

	const openDropdown = () => {
		setDropdownOpen(true);
	};

	const ref = useRef(null);
	useClickAway(ref, () => {
		closeDropdown();
	});

	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClose = (e) => {
		if (e && e.target.id === "wrapper") {
			setIsOpen(false);
		} else if (!e) {
			setIsOpen(false);
		}
	};
	const handleOut = () => {
		localStorage.clear();
		window.location.href = "/";
	};
	return (
		<>
			<Nav onClick={toggleIsHeroSection} isHeroSection={isHeroSection}>
				<NavbarContainer isHeroSection={isHeroSection}>
					<NavLogo to="/" isHeroSection={isHeroSection}>
						<ADGLogo />
					</NavLogo>
					<NavBtn>
						<NavBtnLink
							isHeroSection={isHeroSection}
							onClick={handleOpen}
						>
							Login
						</NavBtnLink>
					</NavBtn>
					<MobileIcon isHeroSection={isHeroSection} onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem isHeroSection={isHeroSection}>
							<NavLink
								isHeroSection={isHeroSection}
								activeClassName="link-active"
								exact
								to="/"
							>
								Home
							</NavLink>
						</NavItem>
						<NavItem isHeroSection={isHeroSection}>
							<NavLink
								isHeroSection={isHeroSection}
								activeClassName="link-active"
								to="/events"
							>
								Events
							</NavLink>
						</NavItem>
						<NavItem isHeroSection={isHeroSection}>
							<NavLink
								isHeroSection={isHeroSection}
								activeClassName="link-active"
								to="/projects"
							>
								Projects
							</NavLink>
						</NavItem>
						<NavItem isHeroSection={isHeroSection}>
							<NavLink
								isHeroSection={isHeroSection}
								activeClassName="link-active"
								to="/domains"
							>
								Domains
							</NavLink>
						</NavItem>
						<NavItem isHeroSection={isHeroSection}>
							<NavLink
								isHeroSection={isHeroSection}
								activeClassName="link-active"
								to="/partners"
							>
								Partners
							</NavLink>
						</NavItem>
						<NavItem isHeroSection={isHeroSection}>
							<NavLink
								isHeroSection={isHeroSection}
								activeClassName="link-active"
								to="/team"
							>
								Team
							</NavLink>
						</NavItem>
					</NavMenu>
					<NavUser
						onMouseEnter={openDropdown}
						onClick={closeDropdown}
					>
						<img src={userIcon} alt="User Icon"></img>
					</NavUser>
				</NavbarContainer>
				<NavDropdown
					onMouseLeave={closeDropdown}
					ref={ref}
					dropdownOpen={dropdownOpen}
				>
					{token !== null ? (
						""
					) : (
						<NavDropLink onClick={toggleDropdown} to="/register">
							Create an Account
						</NavDropLink>
					)}
					<NavDropLink
						onClick={token !== null ? handleOut : handleOpen}
					>
						{token !== null ? "Logout" : "Login"}
					</NavDropLink>
				</NavDropdown>
			</Nav>
			{isOpen && <SignInModal onClose={handleClose} />}
		</>
	);
};

export default Navbar;
