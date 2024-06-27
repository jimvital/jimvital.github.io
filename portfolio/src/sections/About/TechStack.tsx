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
  FaAws,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJira,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
  FaYarn,
} from "react-icons/fa";
import {
  SiBitbucket,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNotion,
  SiPerforce,
  SiRedux,
  SiRobotframework,
  SiTailwindcss,
  SiTwilio,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const FrontendTags = [
  { icon: FaReact, label: "ReactJS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: FaSass, label: "SASS" },
  { icon: SiRedux, label: "Redux" },
  { icon: TbApi, label: "REST" },
  { icon: SiNextdotjs, label: "NextJS" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiGraphql, label: "GraphQL" },
];

const BackendTags = [
  { icon: FaNodeJs, label: "NodeJS" },
  { icon: SiNestjs, label: "NestJS" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: BiLogoPostgresql, label: "PostgreSQL" },
];

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
  { icon: SiBitbucket, label: "Bitbucket" },
  { icon: FaJira, label: "Jira" },
  { icon: SiNotion, label: "Notion" },
  { icon: SiPerforce, label: "Perforce" },
  { icon: SiTwilio, label: "Twilio SendGrid" },
  { icon: FaNpm, label: "NPM" },
  { icon: FaYarn, label: "Yarn" },
  { icon: SiWebpack, label: "Webpack" },
];

const ServiceTags = [
  { icon: FaAws, label: "AWS (Cognito, S3, Lambda, Amplify, AppSync)" },
];

const TechStack: React.FC = () => {
  const renderTags = (data: { icon: As; label: string }[]) =>
    data.map(({ icon, label }) => (
      <Tag key={label} variant="subtle" size="sm" width="max-content">
        <TagLeftIcon boxSize={4} as={icon} />
        <TagLabel>{label}</TagLabel>
      </Tag>
    ));

  return (
    <Stack spacing={3}>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          FRONTEND
        </Text>
        <BsCircleFill size="0.75em" color="#4A5568" />
        {renderTags(FrontendTags)}
      </Flex>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          BACKEND
        </Text>
        <BsCircleFill size="0.75em" color="#4A5568" />
        {renderTags(BackendTags)}
      </Flex>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          PROGRAMMING LANGUAGES
        </Text>
        <BsCircleFill size="0.75em" color="#4A5568" />
        {renderTags(LanguageTags)}
      </Flex>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          TEST FRAMEWORKS
        </Text>
        <BsCircleFill size="0.75em" color="#4A5568" />
        {renderTags(FrameworkTags)}
      </Flex>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          TOOLS
        </Text>
        <BsCircleFill size="0.75em" color="#4A5568" />
        {renderTags(ToolTags)}
      </Flex>
      <Flex gap={4} wrap="wrap" alignItems="center">
        <Text fontWeight="bold" color="#34a0a4">
          SERVICES
        </Text>
        <BsCircleFill size="0.75em" color="#4A5568" />
        {renderTags(ServiceTags)}
      </Flex>
    </Stack>
  );
};

export default TechStack;
