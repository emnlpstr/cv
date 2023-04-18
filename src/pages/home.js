import React, { useState } from "react";
import HomeLayout from "../layout/HomeLayout";
import { Container } from "../components/style/Container.style";
import { EditContext } from "../context/editContext/editContext";
import { EditingContext } from "../context/editingContext/editingContext";
import { EmailForm } from "../components/EmailForm/EmailForm";
import { Sidemenu } from "../components/Sidemenu/Sidemenu";
import { About } from "../components/About/About";
import { homeContent } from "../../contents/home/homeContent";
import { BoxEducation } from "../components/BoxEducation/BoxEducation";
import { Languages } from "../components/Languages/Languages";
import { Skills } from "../components/Skills/Skills";
import { DataContext } from "../context/dataContext/dataContext";
import { MainWrapper } from "../components/style/MainWrapper.style";
import { ProfilePicture } from "../components/ProfilePicture/ProfilePicture";

const mainWrapper = {
  display: "flex",
};

const aside = {
  flexBasis: "30%",
  background: "#bf7650",
  minHeight: "100%",
};

const sticky = {
  position: "sticky",
  top: "115px",
  padding: "22px",
};

const sectionWrapper = {
  marginTop: "22px",
  transition: ".3s ease",
  scrollMarginTop: "100px",
  scrollBehavior: "smooth",
};

const Home = () => {
  const [edit, setEdit] = useState(false);
  const [editing, setEditing] = useState(false);
  const [dataContext, setDataContext] = useState(homeContent);

  const imagePath = "../images/ep_cv_pic.jpg";

  return (
    <EditingContext.Provider value={{ editing, setEditing }}>
      <EditContext.Provider value={{ edit, setEdit }}>
        <DataContext.Provider value={{ dataContext, setDataContext }}>
          <HomeLayout>
            <Container>
              <MainWrapper>
                <div style={aside}>
                  <div style={sticky}>
                    <Sidemenu />
                    <About />
                  </div>
                </div>
                <div className="content">
                  <section id="picture">
                    <ProfilePicture />
                  </section>
                  <section id="education" style={sectionWrapper}>
                    <BoxEducation
                      content={homeContent.education}
                      title="Formazione"
                    />
                  </section>
                  <section id="professions" style={sectionWrapper}>
                    <BoxEducation
                      content={homeContent.professions}
                      title="Esperienze professionali"
                      professions={true}
                    />
                  </section>
                  <section id="languages" style={sectionWrapper}>
                    <Languages content={homeContent.languages} />
                  </section>
                  <section id="skills" style={sectionWrapper}>
                    <Skills content={homeContent.skills} />
                  </section>
                </div>
              </MainWrapper>
            </Container>
            <EmailForm />
          </HomeLayout>
        </DataContext.Provider>
      </EditContext.Provider>
    </EditingContext.Provider>
  );
};

export default Home;
