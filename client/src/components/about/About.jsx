import { Box, styled, Typography, Link } from "@mui/material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
  margin-bottom: 50px;
  color: #ff9800;
`;

const Text = styled(Typography)`
  color: #a8f0c2;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">CodeBlog</Typography>
        <Text variant="h5">
          Introducing CodeBlog, a groundbreaking project designed to foster a
          vibrant community of knowledge-sharing in the realm of computer science and engineering. With CodeBlog, individuals from all walks of
          life can create their own accounts and contribute their unique code,
          shortcuts or algorithms using their preferred approach. This platform
          serves as a haven for enthusiasts and professionals alike, connecting
          them with like-minded individuals. By sharing
          their valuable insights and experiences, users empower others to learn
          and grow. The extensive collection of content available on CodeBlog
          ensures a diverse range of perspectives and approaches, enabling users
          to gain a comprehensive understanding of computer science principles.
          <br />
          <br />
          Furthermore, the interactive nature of the platform allows users to
          engage with the shared content, leaving comments and initiating
          discussions. Authors retain the freedom to update their posts,
          guaranteeing that the information remains current and relevant.
          Embrace the power of collaborative learning and join CodeBlog today
          to embark on an enriching journey of knowledge exchange and personal
          growth.
          <br />
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
