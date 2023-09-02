import React from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  As,
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { MdEmail, MdSmartphone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Contact.css";

import { Section } from "../../components";

const Contact: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1360px)");

  const renderContactInfo = () => {
    const data: { id: string; icon: As; info: React.ReactNode }[] = [
      {
        id: "email",
        icon: MdEmail,
        info: (
          <Link href="mailto:jimvital42@gmail.com" isExternal>
            jimvital42@gmail.com
          </Link>
        ),
      },
      { id: "phone", icon: MdSmartphone, info: "63 920 496 4925" },
      {
        id: "linkedin",
        icon: FaLinkedin,
        info: (
          <Link href="https://www.linkedin.com/in/jimvital/" isExternal>
            LinkedIn
          </Link>
        ),
      },
      {
        id: "github",
        icon: FaGithub,
        info: (
          <Link href="https://github.com/jimvital/" isExternal>
            Github
          </Link>
        ),
      },
    ];

    return data.map(({ id, icon, info }) => (
      <Stack
        key={id}
        align="center"
        spacing={3}
        divider={<StackDivider borderColor="white" />}
      >
        <Icon as={icon} boxSize={10} color="whiteAlpha.900" />
        <Text color="whiteAlpha.900">{info}</Text>
      </Stack>
    ));
  };

  return (
    <Section anchor="contact" className="contact-section">
      <Stack height="100%">
        <Center
          height={isDesktop ? "100%" : "100vh"}
          {...(!isDesktop && { id: "contact" })}
        >
          <Stack align="center" spacing={10}>
            <Heading size="2xl" color="whiteAlpha.900" textAlign="center">
              Contact Me
            </Heading>
            <Flex gap={7} wrap="wrap" justify="center">
              {renderContactInfo()}
            </Flex>
          </Stack>
        </Center>
        <Box background="white">
          <Text fontSize="sm" color="#003459" textAlign="center">
            Developed by Jules Ivan Vital © 2023
          </Text>
        </Box>
      </Stack>
    </Section>
  );
};

export default Contact;
