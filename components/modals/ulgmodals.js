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

const UlgModal = () => {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      <Image
        // boxSize={["50px", "50px", "160px", "160px", "160px"]}
        src={reg}
        mb={["", "", "30px", "30px", "30px"]}
        mr={["0px", "0px", "7px", "7px", "7px"]}
        // alt="Alex Headshot"
      />
      <Image
        // boxSize={["50px", "50px", "160px", "160px", "160px"]}
        src={login}
        mb={["", "", "30px", "30px", "30px"]}
        mr={["0px", "0px", "7px", "7px", "7px"]}
        // alt="Alex Headshot"
      />
      <Image
        // boxSize={["50px", "50px", "160px", "160px", "160px"]}
        src={home}
        mb={["", "", "30px", "30px", "30px"]}
        mr={["0px", "0px", "7px", "7px", "7px"]}
        // alt="Alex Headshot"
      />
      <Image
        // boxSize={["50px", "50px", "160px", "160px", "160px"]}
        src={parking}
        mb={["", "", "30px", "30px", "30px"]}
        mr={["0px", "0px", "7px", "7px", "7px"]}
        // alt="Alex Headshot"
      />
      <Image
        // boxSize={["50px", "50px", "160px", "160px", "160px"]}
        src={post}
        mb={["", "", "30px", "30px", "30px"]}
        mr={["0px", "0px", "7px", "7px", "7px"]}
        // alt="Alex Headshot"
      />
      <Image
        // boxSize={["50px", "50px", "160px", "160px", "160px"]}
        src={qa}
        mb={["", "", "30px", "30px", "30px"]}
        mr={["0px", "0px", "7px", "7px", "7px"]}
        // alt="Alex Headshot"
      />
    </Box>
  );
};

export default UlgModal;
