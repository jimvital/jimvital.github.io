import React from "react";
import {
  Button,
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
import { BsFileImageFill } from "react-icons/bs";

import cdiLogo from "../../assets/cdi.jpg";

const CodeDisruptors: React.FC = () => {
  return (
    <Card maxW="300px">
      <CardBody>
        <Center width="100%" background="black" borderRadius="lg">
          <Image src={cdiLogo} alt="CDI" boxSize="100px" />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">Internship</Heading>
          <Text fontSize="sm">
            • Developed the user interface for the company's e-commerce
            logistics system project.
          </Text>
          <Text fontSize="sm">
            •{" "}
            <Text fontSize="sm" as="b">
              Technologies used:
            </Text>{" "}
            ReactJS, CSS, Semantic UI, Redux
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          href="https://drive.google.com/file/d/16BAcLpltWEs3H--NgNQjZ38OWWPSYico/view?usp=sharing"
          isExternal
        >
          <Button
            leftIcon={<BsFileImageFill size="1.5em" />}
            background="#34a0a4"
            color="white"
            variant="solid"
            size="sm"
          >
            Documentation
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CodeDisruptors;
