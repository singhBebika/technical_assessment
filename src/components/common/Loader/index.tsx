import {Box, Spinner, Text} from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box width={"200px"} margin={"0 auto"} textAlign={"center"} mt={"20%"}>
      <Spinner color="blue.400" />
      <Text fontWeight={"bold"} color={"blue.600"}>
        Please Wait !!!{" "}
      </Text>
    </Box>
  );
};
export default Loader;
