import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import "./Accomplishments.css";

import { Section } from "../../components";
import Saistant from "./Saistant";
import CodeDisruptors from "./CodeDisruptors";
import Samsung from "./Samsung";
import Pilikola from "./Pilikola";

const Accomplishments: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1360px)");

  return (
    <Section anchor="accomplishments" className="accomplishments-section">
      <Stack
        padding={8}
        spacing={8}
        {...(!isDesktop && { id: "accomplishments" })}
      >
        <Heading size="2xl" color="whiteAlpha.900" textAlign="center">
          Accomplishments
        </Heading>
        <SimpleGrid minChildWidth="300px" gap={4}>
          <Saistant />
          <CodeDisruptors />
          <Samsung />
          <Pilikola />
        </SimpleGrid>
      </Stack>
    </Section>
  );
};

export default Accomplishments;
