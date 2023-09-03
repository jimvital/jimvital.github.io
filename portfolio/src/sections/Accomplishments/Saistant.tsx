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

import saistantLogo from "../../assets/saistant.png";

const Saistant: React.FC = () => {
  return (
    <Card maxW="300px">
      <CardBody>
        <Center width="100%" background="#8E1538" borderRadius="lg">
          <Image src={saistantLogo} alt="Saistant" boxSize="100px" />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">SAIStant</Heading>
          <Text fontSize="sm">
            • Created a user interface that integrated artificial intelligence
            (AI) to conveniently classify and organize enrollment-related social
            media posts.
          </Text>
          <Text fontSize="sm">
            •{" "}
            <Text fontSize="sm" as="b">
              Technologies used:
            </Text>{" "}
            ReactJS, HTML, CSS, Semantic UI, Python
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link
            href="https://drive.google.com/file/d/1EkEOSGhxQf7lEeq7yqOTrigHmpVWkv1R/view?usp=sharing"
            isExternal
          >
            <Button
              leftIcon={<GoVideo size="1.5em" />}
              background="#34a0a4"
              color="white"
              variant="solid"
              size="sm"
            >
              Demo
            </Button>
          </Link>
          <Link href="https://github.com/jimvital/SAIStant" isExternal>
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

export default Saistant;
