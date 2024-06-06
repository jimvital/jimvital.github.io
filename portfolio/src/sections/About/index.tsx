import React from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  Button,
  Heading,
  Link,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFilePdf } from "react-icons/bs";

import portfolioDp from "../../assets/portfolio-dp.jpg";

import "./About.css";

import { Section } from "../../components";
import TechStack from "./TechStack";

const About: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1360px)");

  return (
    <Section anchor="about" className="about-section">
      <Stack padding={8} spacing={8} {...(!isDesktop && { id: "about" })}>
        <Heading size="2xl" color="whiteAlpha.900" textAlign="center">
          About Me
        </Heading>
        <SimpleGrid minChildWidth="150px" gap={4}>
          <Stack align="center" spacing={7}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src={portfolioDp}
              alt="Jules Ivan Vital"
            />

            <Link
              href="https://drive.google.com/file/d/1EWB89BPIUYoBK7LqisIC6iBZaTbH8Mj4/view?usp=sharing"
              isExternal
            >
              <Button
                leftIcon={<BsFilePdf size="1.5em" />}
                background="#00A8E8"
                variant="solid"
              >
                View Resume
              </Button>
            </Link>
          </Stack>
          <Stack>
            <Text color="white">
              A B.S. Computer Science graduate from the University of the
              Philippines Los Baños.
            </Text>
            <Text color="white">
              Eager to develop at a full-stack capacity, as part of dedication
              to making web technologies as both appealing and convenient to
              users.
            </Text>
            <Text color="white">
              Using coding and testing experience in this field to contribute in
              quality solutions, while being open to new learnings and
              collaboration for improving self and team dynamics (given the
              exposure to handling a development team).
            </Text>
            <Text color="white">
              Detail-oriented and timely such that main tasks are aimed to be
              finished efficiently and effectively, so that other growth
              opportunities can be pursued (having experienced balancing
              company-focused innovation efforts and side project development).
            </Text>
          </Stack>
        </SimpleGrid>
        <TechStack />
      </Stack>
    </Section>
  );
};

export default About;
