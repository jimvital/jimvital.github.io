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
import { FaCertificate } from "react-icons/fa";

import openEdgLogo from "../../assets/open-edg.png";

const Certification: React.FC = () => {
  return (
    <Card maxW="300px">
      <CardBody>
        <Center
          width="100%"
          background="white"
          boxShadow="inset 0px 0px 0px 2px #7B9A00"
          borderRadius="lg"
        >
          <Image src={openEdgLogo} alt="OpenEDG" boxSize="100px" />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">Certification</Heading>
          <Text fontSize="sm">
            • Became a JSE – Certified Entry-Level JavaScript Programmer.
          </Text>
          <Text fontSize="sm">
            • A recent offering from OpenEDG, a partner of Pearson VUE and Cisco
            Networking Academy.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href="https://verify.openedg.org/?id=01Ti.y6De.dvep" isExternal>
          <Button
            leftIcon={<FaCertificate size="1.5em" />}
            background="#34a0a4"
            color="white"
            variant="solid"
            size="sm"
          >
            Verification
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Certification;
