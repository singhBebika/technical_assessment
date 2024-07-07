import type {Preview} from "@storybook/react";
import {theme} from "../src/theme/index";
import {ChakraProviderDecorator} from "@chakra-ui/storybook-addon/dist/ChakraProviderDecorator.js";
const preview: Preview = {
  decorators: [ChakraProviderDecorator],
  parameters: {
    chakra: {
      theme,
    },
  },
};

export default preview;

// takes styles from chakra ui theme
// export const decorators = [ChakraProviderDecorator];
