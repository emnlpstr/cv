import React from "react";
import { Link } from "gatsby";
import "./styles.css";
import { Container } from "../components/style/Container.style";
import { FlexWrapper } from "../components/style/FlexWrapper";
import LoginButton from "../components/LoginButton/LoginButton";
import EditBtn from "../components/EditButton/EditButton";

const header = {
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  position: "sticky",
  top: "0",
  background: "#E5E8EE",
};

const title = {
  fontSize: "36px",
  fontWeight: "700",
  textDecoration: "none",
  color: "#3D2A26",
};

const content = {
  background: "#E5E8EE",
};

const HomeLayout = ({ children }) => {
  return (
    <React.Fragment>
      <header style={header}>
        <Container>
          <FlexWrapper spaceBetween>
            <Link style={title} to="/">
              My portfolio
            </Link>
            <LoginButton />
          </FlexWrapper>
        </Container>
      </header>
      <main style={content}>
        {children}
        <EditBtn />
      </main>
    </React.Fragment>
  );
};

export default HomeLayout;
