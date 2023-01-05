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
import home from "../../public/assets/ulg/HomeScreen.png";
import login from "../../public/assets/ulg/LoginPage.png";
import parking from "../../public/assets/ulg/ParkingScreen.png";
import reg from "../../public/assets/ulg/RegistrationPage.png";
import post from "../../public/assets/ulg/PostScreen.png";
import qa from "../../public/assets/ulg/QAScreen.png";

import create from "../../public/assets/rmate/create.png";
import drop from "../../public/assets/rmate/drop.png";
import posts from "../../public/assets/rmate/post.png";
import social from "../../public/assets/rmate/Social.png";
import userType from "../../public/assets/rmate/type.png";

const RMateModal = () => {
  return (
    <Box>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Some of my work from RMate</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <UlgModal /> */}
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Image
              // boxSize={["50px", "50px", "160px", "160px", "160px"]}
              src={social}
              mb={["", "", "30px", "30px", "30px"]}
              mr={["0px", "0px", "7px", "7px", "7px"]}
              height={["100%", "100%", "30%", "30%", "30%"]}
              width={["100%", "100%", "30%", "30%", "30%"]}
            />
            <Image
              // boxSize={["50px", "50px", "160px", "160px", "160px"]}
              src={posts}
              mb={["", "", "30px", "30px", "30px"]}
              mr={["0px", "0px", "7px", "7px", "7px"]}
              height={["100%", "100%", "30%", "30%", "30%"]}
              width={["100%", "100%", "30%", "30%", "30%"]}
            />
            <Image
              // boxSize={["50px", "50px", "160px", "160px", "160px"]}
              src={create}
              mb={["", "", "30px", "30px", "30px"]}
              mr={["0px", "0px", "7px", "7px", "7px"]}
              height={["100%", "100%", "30%", "30%", "30%"]}
              width={["100%", "100%", "30%", "30%", "30%"]}
            />
            <Image
              // boxSize={["50px", "50px", "160px", "160px", "160px"]}
              src={drop}
              mb={["", "", "30px", "30px", "30px"]}
              mr={["0px", "0px", "7px", "7px", "7px"]}
              height={["100%", "100%", "30%", "30%", "30%"]}
              width={["100%", "100%", "30%", "30%", "30%"]}
            />
            <Image
              // boxSize={["50px", "50px", "160px", "160px", "160px"]}
              src={userType}
              mb={["", "", "30px", "30px", "30px"]}
              mr={["0px", "0px", "7px", "7px", "7px"]}
              height={["100%", "100%", "30%", "30%", "30%"]}
              width={["100%", "100%", "30%", "30%", "30%"]}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Box>
  );
};

export default RMateModal;
