import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GoGitBranch, GoVideo } from "react-icons/go";

import pilikolaLogo from "../../assets/pilikola.png";

const Pilikola: React.FC = () => {
  return (
    <Card maxW="300px" background="white" boxShadow="base">
      <CardBody>
        <Center
          width="100%"
          background="white"
          boxShadow="inset 0px 0px 0px 2px black"
          borderRadius="lg"
        >
          <Image src={pilikolaLogo} alt="Saistant" boxSize="100px" />
        </Center>
        <Stack mt="6" spacing="3" color="blackAlpha.800">
          <Heading size="md">Pilikola</Heading>
          <Text fontSize="sm">
            • "Pilikola" is a play on the Filipino words: "pili ko" meaning "I
            choose", and "pelikula" meaning "film". This project aims to create
            a film discovery platform, where users can explore movies and
            maintain watchlists.
          </Text>
          <Text fontSize="sm">
            •{" "}
            <Text fontSize="sm" as="b">
              Technologies used:
            </Text>{" "}
            NextJS, NodeJS, Tailwind CSS, GraphQL, Amazon Web Services
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link
            href="https://drive.google.com/file/d/1puVYL3OrOwduRFgvv9wDftjQgc3ygRSD/view?usp=sharing"
            isExternal
          >
            <Button
              leftIcon={<GoVideo size="1.5em" />}
              color="#34a0a4"
              variant="ghost"
              size="sm"
            >
              Demo
            </Button>
          </Link>
          <Link href="https://github.com/jimvital/pilikola" isExternal>
            <Button
              leftIcon={<GoGitBranch size="1.5em" />}
              color="#34a0a4"
              variant="ghost"
              size="sm"
            >
              Codebase
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Pilikola;
