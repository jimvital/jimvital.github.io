import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { BiSolidLock } from "react-icons/bi";

import samsungLogo from "../../assets/samsung.png";

const Samsung: React.FC = () => {
  return (
    <Card maxW="300px" background="white" boxShadow="base">
      <CardBody>
        <Center
          width="100%"
          boxShadow="inset 0px 0px 0px 2px #004CAB"
          borderRadius="lg"
        >
          <Image src={samsungLogo} alt="Samsung" boxSize="100px" />
        </Center>
        <Stack mt="6" spacing="3" color="blackAlpha.800">
          <Heading size="md">Local Business Contribution</Heading>
          <Text fontSize="sm">
            • Contributed to various side projects within Samsung R&D Institute
            Philippines.
          </Text>
          <Text fontSize="sm">
            • Developed management systems and design tools using similar
            frontend technologies{" "}
            <Text fontSize="sm" as="i">
              (see "Resume" for more details)
            </Text>
            .
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Tag variant="subtle" size="md" width="max-content">
          <TagLeftIcon boxSize={5} as={BiSolidLock} color="blackAlpha.900" />
          <TagLabel color="blackAlpha.900">
            Protected by company policy
          </TagLabel>
        </Tag>
      </CardFooter>
    </Card>
  );
};

export default Samsung;
