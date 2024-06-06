import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { Center, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import "./Intro.css";

import { Section } from "../../components";

const Intro: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1360px)");

  return (
    <Section anchor="intro" className="intro-section">
      <Center
        height={isDesktop ? "100%" : "100vh"}
        {...(!isDesktop && { id: "intro" })}
      >
        <Stack
          align="center"
          spacing={7}
          divider={<StackDivider borderColor="#34a0a4" />}
        >
          <Heading size="3xl" color="whiteAlpha.900" textAlign="center">
            Jules Ivan Vital
          </Heading>
          <Text
            fontSize="3xl"
            fontWeight="200"
            color="#00a8e8"
            textAlign="center"
          >
            Software Engineer | JavaScript/React Developer
          </Text>
        </Stack>
      </Center>
    </Section>
  );
};

export default Intro;
