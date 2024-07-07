import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "../theme";
import {BrowserRouter} from "react-router-dom";

export default function Provider({children}: {children: React.ReactNode}) {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </BrowserRouter>
  );
}
