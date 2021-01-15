import React, { useState } from "react";
import {
  AspectRatio,
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

const EVidModal = () => {
  return (
    <Box>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Memory Testing System</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <UlgModal /> */}

          <AspectRatio
            maxH={["400px", "400px", "480px", "480px", "480px"]}
            maxW={["400px", "400px", "480px", "480px", "480px"]}
            ratio={1}
          >
            {/* <iframe
                      title="naruto"
                      src="https://www.youtube.com/embed/sZfo3Zdixi4"
                      allowFullScreen
                    /> */}
            <iframe
              width="806"
              height="453"
              src="https://www.youtube.com/embed/sZfo3Zdixi4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Box>
  );
};

export default EVidModal;
