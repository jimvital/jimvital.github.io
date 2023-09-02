import React from "react";
import "./App.css";

import useFullPageScrollEffect from "./hooks/useFullPageScrollEffect";

import { Section } from "./components";

const App: React.FC = () => {
  useFullPageScrollEffect();

  return (
    <div id="main" className="scroll-container">
      <Section anchor="intro" style={{ backgroundColor: "#DCADAD" }}>
        Section 1
      </Section>
      <Section anchor="about" style={{ backgroundColor: "#555594" }}>
        Section 2
      </Section>
      <Section anchor="achievements" style={{ backgroundColor: "#5992AD" }}>
        Section 3
      </Section>
      <Section anchor="contact" style={{ backgroundColor: "yellow" }}>
        Section 4
      </Section>
    </div>
  );
};

export default App;
