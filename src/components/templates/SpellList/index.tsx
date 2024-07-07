import {Box, HStack, VStack, Text} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "@src/hooks/redux";
import {fetchSpells} from "@src/redux/action/spellAction";
import {NAVIGATION_ROUTES} from "@src/routes/routes.constants";
import {useEffect} from "react";
import {FaEye, FaRegHeart} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

const SpellList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {spells} = useAppSelector((state) => state.spells);

  useEffect(() => {
    dispatch(fetchSpells({name: ""}));
  }, [dispatch]);

  return (
    <VStack
      align="stretch"
      gap={0}
      maxHeight={"85vh"}
      overflowY={"scroll"}
      border={"solid 1px"}
      borderColor={"gray.200"}
      m={3}
    >
      <HStack
        bg="gray.100"
        padding={3}
        bgColor={"blue.400"}
        position="sticky"
        top={0}
        zIndex={1}
        color={"white"}
      >
        <Box flex="2">
          <Text fontWeight="bold">Name</Text>
        </Box>
        <Box flex="1">
          <Text fontWeight="bold">Level</Text>
        </Box>
        <Box flex="1">
          <Text fontWeight="bold">Favourite</Text>
        </Box>
        <Box flex="1">
          <Text fontWeight="bold">Action</Text>
        </Box>
      </HStack>
      {spells?.results?.map((item, index) => (
        <HStack key={item.index} gap={0} padding={3} bg={index % 2 === 0 ? "gray.200" : "white"}>
          <Box flex="2">
            <Text>{item.name}</Text>
          </Box>
          <Box flex="1">
            <Text>{item.level}</Text>
          </Box>
          <Box flex="1">
            <FaRegHeart />
          </Box>
          <Box flex="1" ml={"10px"} cursor={"pointer"}>
            <FaEye
              onClick={() => navigate(`${NAVIGATION_ROUTES.SPELL_DESCRIPTION}/${item.index}`)}
            />
          </Box>
        </HStack>
      ))}
    </VStack>
  );
};

export default SpellList;
