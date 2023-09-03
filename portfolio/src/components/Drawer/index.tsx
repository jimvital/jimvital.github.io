import React, { useRef } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

interface IDrawer {}

const MobileDrawer: React.FC<IDrawer> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef(null);

  return (
    <>
      <Button
        position="static"
        ref={buttonRef}
        onClick={onOpen}
        variant="unstyled"
        padding={3}
      >
        <RxHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={buttonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <Stack>
              <Link href="#intro">Intro</Link>
              <Link href="#about">About Me</Link>
              <Link href="#accomplishments">Accomplishments</Link>
              <Link href="#contact">Contact</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
