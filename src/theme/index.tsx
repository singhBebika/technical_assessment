import {extendTheme} from "@chakra-ui/react";
import styles from "./styles";
import {breakpoints} from "./foundations/breakpoints";
import {colors} from "./foundations/color";
import {buttonTheme} from "./components/Button";
const baseTheme = {
  styles,
  breakpoints,
  colors,
  components: {
    Button: buttonTheme,
  },
};

export const theme = extendTheme(baseTheme);
