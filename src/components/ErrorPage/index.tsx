import {Box, Text, Button, Image, Flex} from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Flex direction={"column"} alignItems={"center"} textAlign={"center"}>
      <Box w={"460px"} h={"233px"}>
        <Image src="src/assets/error.svg" />
      </Box>
      <Box mt={"32px"} mb={"32px"}>
        <Text mb={"12px"} fontSize={"40px"}>
          404: Page Not Found
        </Text>
        <Text fontWeight={"400"} fontSize={"16px"} lineHeight={"20px"} color={"gray_500"}>
          If you believe this is an error, please contact our support team. Alternatively, you can
          return to the homepage
        </Text>
      </Box>
      <Box>
        <Button>Go Home</Button>
      </Box>
    </Flex>
  );
};

export default PageNotFound;
