import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Stack,
  List,
  ListItem,
  Image,
  Img,
  Link,
  IconButton,
  Menu,
  MenuItem,
  Collapse,
  Container,
  Divider,
  Wrap,
  WrapItem,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Typing from "react-typing-animation";
import demo from "../../public/assets/demo.png";

const UlgDemoModal = () => {
  return (
    <Box>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Link
            href="https://expo.io/@yeeitsalex/projects/UCRLifeGuide"
            textDecoration="underline"
            _hover={{ color: "red.500" }}
            _active={{ border: "0" }}
            _focus={{ border: "0" }}
            fontWeight="bold"
            color="blue.400"
          >
            UCR Life Guide Demo
          </Link>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <UlgModal /> */}
          <Text variant="subHeader" color="black">
            Note: Your email for your expo account must be authorized before the
            demo works
          </Text>
          <Text variant="subHeader">
            Please contact through{" "}
            <Link
              href="mailto:yeeitsalexx@gmail.com"
              color="blue.400"
              textDecoration="underline"
              _hover={{
                color: "red.500",
                textDecoration: "underline",
              }}
            >
              email
            </Link>{" "}
            for assistance
          </Text>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Image
              // boxSize={["50px", "50px", "160px", "160px", "160px"]}
              src={demo}
              height={["60%", "60%", "50%", "50%", "50%"]}
              width={["60%", "60%", "50%", "50%", "50%"]}
              mb={["", "", "30px", "30px", "30px"]}
              mr={["0px", "0px", "7px", "7px", "7px"]}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Box>
  );
};

export default UlgDemoModal;
