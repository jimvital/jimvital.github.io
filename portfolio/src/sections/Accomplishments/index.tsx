import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { Card } from "@chakra-ui/react";

import "./Accomplishments.css";

import { Section } from "../../components";

const Accomplishments: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1360px)");

  return (
    <Section anchor="accomplishments" className="accomplishments-section">
      <Card></Card>
    </Section>
  );
};

export default Accomplishments;
