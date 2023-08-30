/** @format */

import { AppBar, Toolbar, styled, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
	background: #ff9800;
	color: black;
`;

const Container = styled(Toolbar)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	// & > a {
    //     text-decoration: none;
	// 	padding: 20px;
	// 	color: #050f1f;
	// }
    
    & > .menu-items {
        display: flex;
        // align-items: center;
        gap: 40px;
      }

	& > img {
		max-height: 50px;
	}
`;

const Header = () => {
	const navigate = useNavigate();

	const logout = async () => navigate("/account");

	return (
		<Component>
			<Container>
				<img src='/web-coding.png' alt='Logo' />
                <div className="menu-items">
				    <Link to='/'>HOME</Link>
				    <Link to='/about'>ABOUT</Link>
				    <Link to='/contact'>CONTACT</Link>
				    <Link to='/account'>LOGOUT</Link>
                </div>
			</Container>
		</Component>
	);
};

export default Header;
// import React, { useState, useEffect } from "react";
// import { AppBar, Toolbar, styled, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const navigate = useNavigate();

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   const Component = styled(AppBar)`
//     background: ${theme === "light" ? "#FFFFFF" : "#000000"};
//     color: ${theme === "light" ? "black" : "white"};
//   `;

//   const Container = styled(Toolbar)`
//     justify-content: center;
//     & > a {
//       padding: 20px;
//       color: ${theme === "light" ? "#000000" : "#FFFFFF"};
//       text-decoration: none;
//     }
//   `;

//   const logout = async () => navigate("/account");

//   return (
//     <Component>
//       <Container>
//         <Link to="/">HOME</Link>
//         <Link to="/about">ABOUT</Link>
//         <Link to="/contact">CONTACT</Link>
//         <Link to="/account">LOGOUT</Link>
//         <Button onClick={toggleTheme}>
//           {theme === "light" ? "Dark Theme" : "Light Theme"}
//         </Button>
//       </Container>
//     </Component>
//   );
// };

// export default Header;
