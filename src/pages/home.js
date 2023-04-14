import React, { useState } from "react";
import HomeLayout from "../layout/HomeLayout";
import { Container } from "../components/style/Container.style";
import { EditContext } from "../context/editContext/editContext";
import { EditingContext } from "../context/editingContext/editingContext";

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

export const Home = () => {
  const [edit, setEdit] = useState(false);
  const [editing, setEditing] = useState(false);

  return (
    <EditContext.Provider value={{ edit, setEdit }}>
      <EditingContext.Provider value={{ editing, setEditing }}>
        <HomeLayout>
          <Container>
            <div style={mainWrapper}>
              <div style={aside}></div>
              <div style={content}>100</div>
            </div>
          </Container>
        </HomeLayout>
      </EditingContext.Provider>
    </EditContext.Provider>
  );
};
