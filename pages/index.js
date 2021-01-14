import Head from "next/head";

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
  UnorderedList,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import UlgModal from "../components/modals/ulgmodals";
//Images
import headshot from "../public/assets/HeadshotPicture.png";
import home from "../public/assets/ulg/HomeScreen.png";
import login from "../public/assets/ulg/LoginPage.png";
import parking from "../public/assets/ulg/ParkingScreen.png";
import reg from "../public/assets/ulg/RegistrationPage.png";
import post from "../public/assets/ulg/PostScreen.png";
import qa from "../public/assets/ulg/QAScreen.png";
import r from "../public/assets/react.png";
import n from "../public/assets/next.png";
import c from "../public/assets/chakra-ui.png";

// Icons
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  FaGithub,
  FaReact,
  FaRegImages,
  FaAngular,
  FaChartArea,
  FaJava,
} from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { DiFirebase, DiNetbeans } from "react-icons/di";
import Typing from "react-typing-animation";
import { SiExpo, SiMongodb, SiPostgresql } from "react-icons/si";

import { ImYoutube2 } from "react-icons/im";

export default function Home(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);

  const [link, setLink] = useState("about");
  const [toPrint, setPrint] = React.useState("Software Engineer");
  const setDescription = () => {
    if (toPrint === "Software Engineer") {
      setPrint("Frontend Developer");
    }
    if (toPrint === "Frontend Developer") {
      setPrint("Software Engineer");
    }
  };

  const handleClick = (item) => {
    setLink(item);
    setShow(false);
  };
  return (
    <Stack as="main">
      <Head>
        <title>Alexander Yee | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}

      <Stack as="div">
        <Flex
          as="nav"
          margin="0"
          padding={["2", "2", "0", "0", "0"]}
          justify={["", "", "center", "center", "center"]}
          bg="blue.800"
          color="white"
          height={["auto", "auto", "100%", "100%", "100%"]}
          width={["100%", "100%", "200px", "280px", "280px"]}
          position={["relative", "relative", "fixed", "fixed", "fixed"]}
          overflow="hidden"
          {...props}
        >
          <Flex
            align={["center", "center", "center", "center", "center"]}
            flexDirection={["column", "column", "column", "column", "column"]}
            justify="center"
            alignItems={["left", "left", "center", "center", "center"]}
          >
            <Flex>
              <Image
                borderRadius="full"
                boxSize={["50px", "50px", "160px", "160px", "160px"]}
                border="1px"
                borderWidth={["3px", "3px", "7px", "7px", "7px"]}
                borderColor="blue.700"
                src={headshot}
                mb={["", "", "30px", "30px", "30px"]}
                // alt="Alex Headshot"
              />
              <Heading
                display={["block", "block", "none", "none", "none"]}
                alignSelf="center"
                ml="10px"
                fontFamily="SairaCondensed-SemiBold"
                letterSpacing="1.5px"
              >
                Alexander Yee
              </Heading>
            </Flex>

            {/* Displayed when menu open for smaller sizes */}
            <Box display={["flex", "flex", "none", "none", "none"]}>
              <Collapse in={show}>
                <Link
                  href="#about"
                  variant={
                    show === true && link === "about"
                      ? "nav-open-press"
                      : show === true
                      ? "nav-open"
                      : link === "about"
                      ? "nav-link-pressed"
                      : "nav-link"
                  }
                  onClick={() => handleClick("about")}
                >
                  ABOUT
                </Link>
                <Link
                  href="#experience"
                  variant={
                    show === true && link === "experience"
                      ? "nav-open-press"
                      : show === true
                      ? "nav-open"
                      : link === "experience"
                      ? "nav-link-pressed"
                      : "nav-link"
                  }
                  onClick={() => handleClick("experience")}
                >
                  EXPERIENCE
                </Link>
                <Link
                  href="#projects"
                  variant={
                    show === true && link === "projects"
                      ? "nav-open-press"
                      : show === true
                      ? "nav-open"
                      : link === "projects"
                      ? "nav-link-pressed"
                      : "nav-link"
                  }
                  onClick={() => handleClick("projects")}
                >
                  PROJECTS
                </Link>
                <Link
                  href="#skills"
                  variant={
                    show === true && link === "skills"
                      ? "nav-open-press"
                      : show === true
                      ? "nav-open"
                      : link === "skills"
                      ? "nav-link-pressed"
                      : "nav-link"
                  }
                  onClick={() => handleClick("skills")}
                >
                  SKILLS
                </Link>
              </Collapse>
            </Box>

            {/* displayed when collapsed transition not needed  */}
            <Flex
              flexDirection={["column", "column", "column", "column", "column"]}
              // justify={["", "", "center", "center", "center"]}
              alignItems={["left", "left", "center", "center", "center"]}
              // display={show === false ? "flex" : "none"}
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <Link
                href="#about"
                variant={link === "about" ? "nav-link-pressed" : "nav-link"}
                onClick={() => handleClick("about")}
              >
                ABOUT
              </Link>
              <Link
                href="#experience"
                variant={
                  link === "experience" ? "nav-link-pressed" : "nav-link"
                }
                onClick={() => handleClick("experience")}
              >
                EXPERIENCE
              </Link>
              <Link
                href="#projects"
                variant={link === "projects" ? "nav-link-pressed" : "nav-link"}
                onClick={() => handleClick("projects")}
              >
                PROJECTS
              </Link>
              <Link
                href="#skills"
                variant={link === "skills" ? "nav-link-pressed" : "nav-link"}
                onClick={() => handleClick("skills")}
              >
                SKILLS
              </Link>
            </Flex>
          </Flex>

          {/* </Box> */}
          <IconButton
            aria-label="Toggle Menu"
            bg="blue.800"
            borderColor="blue.600"
            borderWidth="1px"
            icon={<HamburgerIcon />}
            display={["block", "block", "none", "none", "none"]}
            position={["absolute", "absolute", "", "", ""]}
            top={["3", "3", "", "", ""]}
            right={["2", "2", "", "", ""]}
            onClick={() => setShow(!show)}
            _hover={{ color: "red.500" }}
          />
        </Flex>
      </Stack>

      {/* Start Main */}
      <Stack as="div" id="about">
        <Flex
          ml={["0px", "0px", "200px", "280px", "280px"]}
          // padding="1px 16px"
          height={{
            base: "150%",
            sm: "150%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          }}
          width={["100%", "100%", "auto", "auto", "auto"]}
          flexDirection="column"
          // justify="center"
          // align="center"
          position={[
            "relative",
            "relative",
            "relative",
            "relative",
            "relative",
          ]}
        >
          <List
            spacing={100}
            mt="100px"
            //   display="flex"
            //   flexDirection="column"
          >
            <ListItem
              pb="100px"
              height={["500px", "500px", "800px", "800px", "800px"]}
            >
              <Flex
                width={["100%", "100%", "100%", "100%", "100%"]}
                pl={["20px", "20px", "45px", "45px", "45px"]}
                pr={["20px", "20px", "0px", "0px", "0px"]}
                //   mt={["", "", "-30px", "-30px", "-30px"]}
              >
                <Flex
                  flexDirection={[
                    "column",
                    "column",
                    "column",
                    "column",
                    "column",
                  ]}
                  width="100%"
                >
                  <Container ml="-13px">
                    <Box display="flex" flexDirection="row">
                      <Text fontSize={["40px", "40px", "60px", "75px", "75px"]}>
                        ALEXANDER
                      </Text>
                      <Text
                        fontSize={["40px", "40px", "60px", "75px", "75px"]}
                        ml="10px"
                        color="blue.800"
                      >
                        YEE
                      </Text>
                    </Box>
                  </Container>
                  <Divider borderColor="red.500" />
                  <Typing
                    speed={30}
                    loop={true}
                    onFinishedTyping={() => {
                      setDescription();
                    }}
                  >
                    <Text
                      fontSize={["22px", "22px", "26px", "32px", "32px"]}
                      fontWeight="normal"
                      letterSpacing="1px"
                    >
                      {toPrint}
                    </Text>
                    <Typing.Backspace count={20} delay={4000} />
                  </Typing>
                  <List display="flex">
                    <ListItem
                      fontSize={["12px", "15px", "20px", "25px", "25px"]}
                      fontWeight="normal"
                      fontFamily="SairaExtraCondensed-SemiBold"
                      color="gray.500"
                    >
                      San Jose, CA
                    </ListItem>
                    <ListItem
                      fontSize={["12px", "15px", "20px", "25px", "25px"]}
                      fontWeight="normal"
                      fontFamily="SairaExtraCondensed-SemiBold"
                      px="5px"
                      color="gray.500"
                    >
                      {"•"}
                    </ListItem>
                    <ListItem
                      fontSize={["12px", "15px", "20px", "25px", "25px"]}
                      fontWeight="normal"
                      fontFamily="SairaExtraCondensed-SemiBold"
                      color="gray.500"
                    >
                      (408)710-7777
                    </ListItem>
                    <ListItem
                      fontSize={["12px", "15px", "20px", "25px", "25px"]}
                      fontWeight="normal"
                      fontFamily="SairaExtraCondensed-SemiBold"
                      px="5px"
                      color="gray.500"
                    >
                      {"•"}
                    </ListItem>
                    <ListItem
                      fontSize={["12px", "15px", "20px", "25px", "25px"]}
                      fontWeight="normal"
                      fontFamily="SairaExtraCondensed-SemiBold"
                      color="blue.800"
                    >
                      <Link
                        href="mailto:yeeitsalexx@gmail.com"
                        _hover={{
                          color: "red.500",
                          textDecoration: "underline",
                        }}
                      >
                        YEEITSALEXX@GMAIL.COM
                      </Link>
                    </ListItem>
                  </List>
                  <Box width={["100%", "100%", "80%", "80%", "80%"]}>
                    <Text
                      color="gray.500"
                      fontSize={["10px", "10x", "15px", "18px", "18px"]}
                      mt={["15px", "15px", "30px", "30px", "30px"]}
                      mb={["", "", "30", "30px", "30px"]}
                      fontFamily="OpenSans-Regular"
                    >
                      I'm an enthusiastic software engineer loves creating pixel
                      perfect user interfaces for web and mobile applications.
                    </Text>
                  </Box>

                  <Link
                    width={["45%", "45%", "50%", "18%", "30%"]}
                    href="https://drive.google.com/file/d/1b9kJvHPl-_V24JnY3Wc6qyXTbdkBRfsr/view?usp=sharing"
                    _focus={{ borderColor: "white" }}
                  >
                    <Text
                      mt="20px"
                      // mb={["20px", "20px", "30px", "30px", "30px"]}
                      fontSize={["10px", "10x", "18px", "18px", "18px"]}
                      color="blue.800"
                      _hover={{ color: "red.500" }}
                      fontFamily="OpenSans-Regular"
                      letterSpacing="0"
                    >
                      View Resume as PDF
                    </Text>
                  </Link>
                  <Box mt="30px" display="flex" flexDirection="row">
                    <Link href="https://github.com/YeeitsAlex">
                      <IconButton
                        _hover={{ color: "red.500" }}
                        _active={{ border: "0" }}
                        _focus={{ border: "0" }}
                        bg="white"
                        color="blue.700"
                        boxSize="50px"
                        // mt={["7px", "7px", "0px", "0px", "0px"]}
                        icon={<FaGithub size={"38px"} />}
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/yee-alexander/"
                      ml="5px"
                    >
                      <IconButton
                        _hover={{ color: "red.500" }}
                        _active={{ border: "0" }}
                        _focus={{ border: "0" }}
                        boxSize={["30px", "30px", "50px", "50px", "50px"]}
                        bg="white"
                        color="blue.700"
                        icon={<TiSocialLinkedinCircular size="58px" />}
                      />
                    </Link>
                  </Box>
                </Flex>
              </Flex>
            </ListItem>
            <ListItem
              id="experience"
              height={["auto", "auto", "auto", "800px", "800px"]}
            >
              <Divider color={"gray.500"} />
              <Box pl={["20px", "20px", "45px", "45px", "45px"]} pr="20px">
                <Text variant="title">Experience</Text>
                <Box display="flex" justifyContent="space-between">
                  <Text variant="header">Frontend Developer</Text>
                  <Text variant="sans"> July 2020 - Present</Text>
                </Box>
                <Text variant="subHeader">MyCampusMate</Text>
                <UnorderedList
                  fontFamily="OpenSans-Regular"
                  pl="25px"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "16px", "16px", "16px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  spacing={3}
                >
                  <ListItem>
                    Developed UI/UX for RMate mobile application with supplied
                    wireframes using react-native
                  </ListItem>
                  <ListItem>
                    Integrate API (JSON) from Heroku endpoints to send and
                    recieve data from the python(flask) database
                  </ListItem>
                  <ListItem>
                    Build scalable and maintainable code to implement new,
                    customer-facing features to increase user connectivity by
                    creating a social feed and the ability for users to create
                    posts and manage profile pages
                  </ListItem>
                  <ListItem>
                    Maintained states and dispatched actions using redux while
                    also using reducers to manage store state tree
                  </ListItem>
                  <ListItem>
                    Maintain proper documentation and bug reports throughout the
                    software development life cycle while using git for version
                    control
                  </ListItem>
                </UnorderedList>
              </Box>
            </ListItem>
            <ListItem
              id="projects"
              height={["auto", "auto", "auto", "auto", "auto"]}
            >
              <Divider color={"gray.500"} />
              <Box pl={["20px", "20px", "45px", "45px", "45px"]} pr="20px">
                <Box>
                  <Text variant="title">Projects</Text>
                  <Text variant="header">UCR Life Guide</Text>
                  <Text variant="subHeader">Mobile Application</Text>
                </Box>
                <Box>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="cyan.300"
                    pr="10px"
                    size="sm"
                  >
                    <FaReact />
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px">React-Native</TagLabel>
                  </Tag>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="yellow.300"
                    pr="10px"
                    size="sm"
                  >
                    <DiFirebase size="20px" />
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px">Firebase</TagLabel>
                  </Tag>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="black"
                    pr="10px"
                    size="sm"
                  >
                    <SiExpo color="white" size="12px" />
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px" color="white">
                      Expo
                    </TagLabel>
                  </Tag>
                </Box>
                <Box mt={["", "", "", "7px", "7px"]}>
                  <Link
                    href="https://github.com/YeeitsAlex/UCR-Life-Guide-App"
                    mr="3px"
                  >
                    <IconButton
                      _hover={{ color: "red.500" }}
                      _active={{ border: "0" }}
                      _focus={{ border: "0" }}
                      bg="white"
                      color="blue.700"
                      icon={<FaGithub size={"38px"} />}
                    />
                  </Link>
                  <Link onClick={onOpen}>
                    <IconButton
                      _hover={{ color: "red.500" }}
                      _active={{ border: "0" }}
                      _focus={{ border: "0" }}
                      bg="blue.700"
                      borderRadius="full"
                      color="white"
                      icon={<FaRegImages size={"26px"} />}
                    />
                  </Link>
                </Box>
                <UnorderedList
                  fontFamily="OpenSans-Regular"
                  pl="25px"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "16px", "16px", "16px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  spacing={3}
                >
                  <ListItem>
                    Designed user interface using Adobe XD to create wireframes.
                  </ListItem>
                  <ListItem>
                    Utilized firebase features such as user authentication, to
                    be able to register users, and cloud firestore to store and
                    manage relevant data synchronously/asynchronously
                  </ListItem>
                  <ListItem>
                    Implemented mobile application using React-Native for the
                    front-end connected to firebase database for the back-end
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box
                pl={["20px", "20px", "45px", "45px", "45px"]}
                pr="20px"
                mt={["", "", "", "", "20px"]}
              >
                <Box>
                  <Text variant="header">
                    Mapradish Visualization Interface
                  </Text>
                  <Text variant="subHeader">Web Application</Text>
                </Box>
                <Box>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="red.500"
                    color="white"
                    pr="10px"
                    size="sm"
                  >
                    <FaAngular />
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px">Angular</TagLabel>
                  </Tag>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="purple.300"
                    pr="10px"
                    size="sm"
                    color="white"
                  >
                    <FaChartArea size="12px" />
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px">Highcharts</TagLabel>
                  </Tag>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="green.300"
                    pr="10px"
                    size="sm"
                  >
                    <SiMongodb color="white" size="12px" />
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px" color="white">
                      MongooseDB
                    </TagLabel>
                  </Tag>
                </Box>
                <Box mt={["", "", "", "7px", "7px"]}>
                  <Link
                    href="https://github.com/YeeitsAlex/final-project-updog"
                    mr="3px"
                  >
                    <IconButton
                      _hover={{ color: "red.500" }}
                      _active={{ border: "0" }}
                      _focus={{ border: "0" }}
                      bg="white"
                      color="blue.700"
                      icon={<FaGithub size={"38px"} />}
                    />
                  </Link>
                </Box>
                <UnorderedList
                  fontFamily="OpenSans-Regular"
                  pl="25px"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "16px", "16px", "16px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  spacing={3}
                >
                  <ListItem>
                    MEAN stack web application delivered for a company (Sarcix)
                    based out of the University of Southern California
                  </ListItem>
                  <ListItem>
                    Led UI/UX design and responsible for creating and mantaining
                    front-end applications using Angular 8, SCSS and TypeScript
                  </ListItem>
                  <ListItem>
                    Software loads mapped curricular data from the database and
                    allows for visualization through a large heatmap using the
                    Highcharts API
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box
                pl={["20px", "20px", "45px", "45px", "45px"]}
                pr="20px"
                mt={["", "", "", "", "20px"]}
              >
                <Box>
                  <Text variant="header">Flight Management Database</Text>
                  <Text variant="subHeader">Netbeans Computer Application</Text>
                </Box>
                <Box>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="blue.200"
                    pr="10px"
                    size="sm"
                  >
                    <SiPostgresql />
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px">Postgres</TagLabel>
                  </Tag>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="orange.300"
                    pr="10px"
                    size="sm"
                    color="white"
                  >
                    <FaJava size="12px" />
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px">Java</TagLabel>
                  </Tag>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="green.300"
                    pr="10px"
                    size="sm"
                    color="black"
                  >
                    <DiNetbeans size="12px" />
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px">Netbeans</TagLabel>
                  </Tag>
                </Box>
                <Box mt={["", "", "", "7px", "7px"]}>
                  <Link
                    href="https://github.com/YeeitsAlex/Flight-Management-Database"
                    mr="3px"
                  >
                    <IconButton
                      _hover={{ color: "red.500" }}
                      _active={{ border: "0" }}
                      _focus={{ border: "0" }}
                      bg="white"
                      color="blue.700"
                      icon={<FaGithub size={"38px"} />}
                    />
                  </Link>
                </Box>
                <UnorderedList
                  fontFamily="OpenSans-Regular"
                  pl="25px"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "16px", "16px", "16px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  spacing={3}
                >
                  <ListItem>
                    Incorporated Java and PostgresSQL to apply complex queries
                    using joins, grouping, triggers and aggregation
                  </ListItem>
                  <ListItem>
                    Design and use triggers to automatically generate unique
                    primary keys in the database
                  </ListItem>
                  <ListItem>
                    Led design and implementation to create and easy-to-use
                    graphical user interface, using the Java Swing Library and
                    Netbeans
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box
                pl={["20px", "20px", "45px", "45px", "45px"]}
                pr="20px"
                mt={["", "", "", "", "20px"]}
              >
                <Box>
                  <Text variant="header">Memory Testing System</Text>
                  <Text variant="subHeader">Embedded System</Text>
                </Box>
                <Box>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="black"
                    pr="10px"
                    size="sm"
                    color="white"
                  >
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px">C/Embedded C</TagLabel>
                  </Tag>
                  <Tag
                    mr="5px"
                    borderRadius="full"
                    bg="red.500"
                    pr="10px"
                    size="sm"
                    color="white"
                  >
                    {/* <Text variant="subHeader">MyCampusMate</Text> */}
                    <TagLabel ml="3px">Atmel Studio</TagLabel>
                  </Tag>
                </Box>
                <Box mt={["", "", "", "7px", "7px"]}>
                  <Link
                    href="https://github.com/YeeitsAlex/Memory-Testing-System"
                    mr="3px"
                  >
                    <IconButton
                      _hover={{ color: "red.500" }}
                      _active={{ border: "0" }}
                      _focus={{ border: "0" }}
                      bg="white"
                      color="blue.700"
                      icon={<FaGithub size={"38px"} />}
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=sZfo3Zdixi4&t=0s"
                    mr="3px"
                    isExternal
                  >
                    <IconButton
                      _hover={{ color: "red.500" }}
                      _active={{ border: "0" }}
                      _focus={{ border: "0" }}
                      bg="blue.700"
                      borderRadius="full"
                      color="white"
                      icon={<ImYoutube2 size={"30px"} />}
                    />
                  </Link>
                </Box>
                <UnorderedList
                  fontFamily="OpenSans-Regular"
                  pl="25px"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "16px", "16px", "16px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  spacing={3}
                >
                  <ListItem>
                    Created a single level memory testing game using C
                    programming language on an ATMega1284 embedded system
                  </ListItem>
                  <ListItem>
                    Setup and programmed hardware such as a joystick for
                    multi-directional control, 8x8 LED matrix and speaker for
                    user interaction
                  </ListItem>
                  <ListItem>
                    Implemented an 8-bit sound frequency array and mapped
                    frequencies to cells on LED Matrix
                  </ListItem>
                </UnorderedList>
              </Box>
            </ListItem>
            <ListItem
              id="skills"
              height={["800px", "800px", "800px", "1000px", "1000px"]}
            >
              <Divider color={"gray.500"} />
              <Box pl={["20px", "20px", "45px", "45px", "45px"]} pr="20px">
                <Text variant="title">Skills</Text>
                <Box display="flex">
                  <Text variant="header">Programming Languages:</Text>
                </Box>
                <Box
                  fontFamily="OpenSans-Regular"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "18px", "18px", "18px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  ml="15px"
                  display="flex"
                  flexWrap="wrap"
                >
                  <Text variant="skill">C++</Text>
                  <Text variant="skill">Python</Text>
                  <Text variant="skill">HTML5</Text>
                  <Text variant="skill">CSS3</Text>
                  <Text variant="skill">JavaScript</Text>
                  <Text></Text>
                </Box>
                <Box display="flex" mt="20px">
                  <Text variant="header">Databases:</Text>
                </Box>
                <Box
                  fontFamily="OpenSans-Regular"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "18px", "18px", "18px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  ml="15px"
                  display="flex"
                  flexWrap="wrap"
                >
                  <Text variant="skill">PostgresSQL</Text>
                  <Text variant="skill">Firebase</Text>
                  <Text></Text>
                </Box>
                <Box display="flex" mt="20px">
                  <Text variant="header">Frameworks:</Text>
                </Box>
                <Box
                  fontFamily="OpenSans-Regular"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "18px", "18px", "18px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  ml="15px"
                  display="flex"
                  flexWrap="wrap"
                >
                  <Text variant="skill">React</Text>
                  <Text variant="skill">React-Native</Text>
                  <Text variant="skill">NextJs</Text>
                  <Text variant="skill">Chakra UI</Text>
                  <Text variant="skill">Bootstrap</Text>
                  <Text variant="skill">Angular</Text>
                  <Text></Text>
                </Box>
                <Box display="flex" mt="20px">
                  <Text variant="header">Tools and Technologies:</Text>
                </Box>
                <Box
                  fontFamily="OpenSans-Regular"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "18px", "18px", "18px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  ml="15px"
                  display="flex"
                  flexWrap="wrap"
                >
                  <Text variant="skill">Git</Text>
                  <Text variant="skill">Visual Studio Code</Text>
                  <Text variant="skill">Expo CLI</Text>
                  <Text variant="skill">NPM</Text>
                  <Text variant="skill">Adobe XD</Text>
                  <Text variant="skill">Google Test Framework</Text>
                  <Text variant="skill">XCode</Text>
                  <Text variant="skill">Postman</Text>
                  <Text variant="skill">Heroku</Text>
                  <Text variant="skill">Redux</Text>
                  <Text variant="skill">APIs</Text>
                </Box>
                <Box display="flex" mt="20px">
                  <Text variant="header">Concepts:</Text>
                </Box>
                <Box
                  fontFamily="OpenSans-Regular"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "18px", "18px", "18px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  ml="15px"
                  display="flex"
                  flexWrap="wrap"
                >
                  <Text variant="skill">Object-Oriented Programming</Text>
                  <Text variant="skill">Data Structures and Algorithms</Text>
                  <Text variant="skill">Design Patterns</Text>
                  <Text variant="skill">Software Testing</Text>
                  <Text variant="skill">Agile/Scrum</Text>

                  <Text variant="skill">Technical Communications</Text>
                </Box>
                <Box display="flex" mt="20px">
                  <Text variant="header">Soft Skills:</Text>
                </Box>
                <Box
                  fontFamily="OpenSans-Regular"
                  pt="7px"
                  color="gray.500"
                  fontSize={["10px", "10px", "18px", "18px", "18px"]}
                  pr={["0px", "0px", "100px", "200px", "200px"]}
                  ml="15px"
                  display="flex"
                  flexWrap="wrap"
                >
                  <Text variant="skill">Leadership</Text>
                  <Text variant="skill">
                    Effective Writing and Communication
                  </Text>
                  <Text variant="skill">Time Management</Text>
                  <Text variant="skill">Teamwork</Text>
                  <Text variant="skill">Critical Thinking</Text>
                  <Text variant="skill">Problem Solving</Text>
                  <Text></Text>
                </Box>
              </Box>
              {/* <Box display="flex" mt="70px" ml="35px" align="center">
                <Image
                  // boxSize={["50px", "50px", "160px", "160px", "160px"]}
                  src={r}
                  mb={["", "", "30px", "30px", "30px"]}
                  mr={["0px", "0px", "7px", "7px", "7px"]}
                  boxSize="50px"
                  // size="10px"
                />
                <Image
                  // boxSize={["50px", "50px", "160px", "160px", "160px"]}
                  src={n}
                  mb={["", "", "30px", "30px", "30px"]}
                  mr={["0px", "0px", "7px", "7px", "7px"]}
                  boxSize="50px"
                  // size="10px"
                />
                <Image
                  // boxSize={["50px", "50px", "160px", "160px", "160px"]}
                  src={c}
                  mb={["", "", "30px", "30px", "30px"]}
                  mr={["0px", "0px", "7px", "7px", "7px"]}
                  boxSize="50px"
                  // size="10px"
                />
              </Box> */}
            </ListItem>
          </List>
        </Flex>
      </Stack>
      {/* end <Main /> */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>UCR Life Guide Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UlgModal />
          </ModalBody>

          <ModalFooter justify="center">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
