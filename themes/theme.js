import { extendTheme } from "@chakra-ui/react";
// Global style overrides
import styles from "./styles";

// Component style overrides
import Link from "./link";
import Text from "./text";

const overrides = {
  styles,
  components: {
    Link,
    Text,
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
