import React from "react";
import {
  As,
  Flex,
  Stack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import { DiJava, DiJavascript, DiPython } from "react-icons/di";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJira,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiJest,
  SiNextdotjs,
  SiRedux,
  SiRobotframework,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const FrontendTags = [
  { icon: FaReact, label: "ReactJS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: FaSass, label: "SASS" },
  { icon: SiRedux, label: "Redux" },
  { icon: TbApi, label: "REST" },
  { icon: SiNextdotjs, label: "NextJS" },
];

const BackendTags = [{ icon: FaNodeJs, label: "NodeJS" }];

const LanguageTags = [
  { icon: DiJavascript, label: "JavaScript" },
  { icon: DiJava, label: "Java" },
  { icon: DiPython, label: "Python" },
];

const FrameworkTags = [
  { icon: SiJest, label: "Jest" },
  { icon: SiRobotframework, label: "Robot Framework" },
];

const ToolTags = [
  { icon: FaGitAlt, label: "Git" },
  { icon: FaJira, label: "Jira" },
];

const TechStack: React.FC = () => {
  const renderTags = (data: { icon: As; label: string }[]) =>
    data.map(({ icon, label }) => (
      <Tag key={label} variant="subtle" size="lg" width="max-content">
        <TagLeftIcon boxSize={6} as={icon} />
        <TagLabel>{label}</TagLabel>
      </Tag>
    ));

  return (
    <Stack>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          FRONTEND
        </Text>
        <BsCircleFill size="0.75em" />
        {renderTags(FrontendTags)}
      </Flex>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          LANGUAGES
        </Text>
        <BsCircleFill size="0.75em" />
        {renderTags(LanguageTags)}
      </Flex>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          FRAMEWORKS
        </Text>
        <BsCircleFill size="0.75em" />
        {renderTags(FrameworkTags)}
      </Flex>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          TOOLS
        </Text>
        <BsCircleFill size="0.75em" />
        {renderTags(ToolTags)}
      </Flex>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          BACKEND
        </Text>
        <BsCircleFill size="0.75em" />
        {renderTags(BackendTags)}
      </Flex>
    </Stack>
  );
};

export default TechStack;
