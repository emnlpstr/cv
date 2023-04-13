import * as React from "react";
import HomeLayout from "../layout/HomeLayout";
import { Container } from "../components/style/Container.style";

const mainWrapper = {
  display: "flex",
};

const aside = {
  flexBasis: "30%",
  background: "#bf7650",
  height: "100vh",
};

const content = {
  flexBasis: "70%",
  background: "#E5E8EE",
  height: "100vh",
};

const IndexPage = () => {
  return (
    <HomeLayout>
      <Container>
        <div style={mainWrapper}>
          <div style={aside}>
            
          </div>
          <div style={content}>100</div>
        </div>
      </Container>
    </HomeLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
