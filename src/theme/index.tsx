import {extendTheme} from "@chakra-ui/react";
import styles from "./styles";
import {breakpoints} from "./foundations/breakpoints";
import {colors} from "./foundations/color";
const baseTheme = {
  styles,
  breakpoints,
  colors,
};

export const theme = extendTheme(baseTheme);
