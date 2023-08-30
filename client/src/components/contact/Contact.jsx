import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, LinkedIn, Instagram, Email } from "@mui/icons-material";
// import styled from "styled-components";
const Banner = styled(Box)`
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px top -100px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
  margin-bottom: 40px;
  color: #ff9800;
`;
const StyledFooter = styled(Typography)`
  color: #42a0a0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  line-height: 1.2; /* Add spacing between lines */
`;

const Text = styled(Typography)`
color: #a8f0c2;
`;

const Contact = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Getting in touch is easy!</Typography>
        <Text variant="h5">
          I'm Syed Ateeb, currently in the final year of B.Tech in
          Computer Science & Engineering from NIT Jamshedpur. I have a keen
          interest in web development and problem-solving, and I love combining
          both of these passions. I like to code things from scratch, and enjoy bringing ideas to life in the browser. Whether you have a question or just want to say hi, I’ll try my best to get back to you!. {" "}
          {/* <Link
            href="https://www.nitjsr.ac.in/Clubs/Webteam"
            color="inherit"
            target="_blank"
          >
            nitjsr.ac.in.
          </Link> */}
        </Text>


        <StyledFooter variant="h5">
          Reach out to me on
          {"\n"}
          <Link
            href="https://github.com/AteebHussain/"
            color="#ff9800"
            target="_blank"><GitHub/></Link>

          <Link
            href="mailto:syedateebhussain123@gmail.com?Subject=Hey! I wanna connect with you regarding your project"
            target="_blank"
            color="#ff9800"><Email /></Link>

          <Link
            href="https://www.linkedin.com/in/syed-ateeb-359867225/"
            color="#ff9800"
            target="_blank"><LinkedIn /></Link>

          <Link
            href="https://www.instagram.com/ateeeeeeeb_"
            color="#ff9800"
            target="_blank"><Instagram /></Link>
        </StyledFooter>


      </Wrapper>
    </Box>
  );
};

export default Contact;
