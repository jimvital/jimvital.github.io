import React from "react";
import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "usehooks-ts";
import "./App.css";

import useFullPageScrollEffect from "./hooks/useFullPageScrollEffect";

import { MobileDrawer } from "./components";
import { Intro, About, Accomplishments, Contact } from "./sections";

const App: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1360px)");

  useFullPageScrollEffect(isDesktop);

  return (
    <>
      {!isDesktop && <MobileDrawer />}
      <Box
        id="main"
        className={isDesktop ? "full-scroll-container" : "scroll-container"}
      >
        <Intro />
        <About />
        <Accomplishments />
        <Contact />
      </Box>
    </>
  );
};

export default App;
