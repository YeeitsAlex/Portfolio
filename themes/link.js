const Link = {
  baseStyle: {
    _hover: {
      textDecoration: "none",
    },
    letterSpacing: "1px",
  },
  variants: {
    "nav-link": {
      _hover: {
        color: "red.500",
      },
      fontSize: ["22px", "22px", "28px", "28px", "28px"],
      py: ["", "", "7px", "7px", "7px"],
      px: ["5px", "5px", "0px", "0px", "0px"],
      // display: ["none", "none", "block", "block", "block"],
      fontFamily: "SairaCondensed-SemiBold",
    },
    "nav-link-pressed": {
      fontWeight: "bold",
      color: "red.500",
      py: ["", "", "7px", "7px", "7px"],
      px: ["5px", "5px", "0px", "0px", "0px"],
      fontSize: ["22px", "22px", "28px", "28px", "28px"],
      // display: ["none", "none", "block", "block", "block"],
      fontFamily: "SairaCondensed-SemiBold",
    },
    "nav-open": {
      textAlign: "left",
      fontSize: ["22px", "22px", "28px", "28px", "28px"],
      display: ["flex", "flex", "none", "none", "none"],
      py: ["", "", "7px", "7px", "7px"],
      flexDirection: "column",
      fontFamily: "SairaCondensed-SemiBold",
    },
    "nav-open-press": {
      color: "red.500",
      textAlign: "left",
      fontSize: ["22px", "22px", "28px", "28px", "28px"],
      display: ["flex", "flex", "none", "none", "none"],
      py: ["", "", "7px", "7px", "7px"],
      flexDirection: "column",
      fontFamily: "SairaCondensed-SemiBold",
    },
  },
};

export default Link;
