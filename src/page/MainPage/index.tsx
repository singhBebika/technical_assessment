import React, {useState} from "react";

import SpellList from "@src/components/templates/SpellList";
import {Box, Flex, Input, InputGroup, InputRightAddon, Text} from "@chakra-ui/react";
import {FaSearch} from "react-icons/fa";
import {useAppDispatch} from "@src/hooks/redux";
import {fetchSpells} from "@src/redux/action/spellAction";
import {ErrorBoundary} from "react-error-boundary";
import ErrorPage from "@src/components/ErrorPage";

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(fetchSpells({name: searchTerm}));
    }
  };

  return (
    <Box display={"block"} margin={"0 auto"} maxWidth={"1000px"}>
      <Flex justifyContent={"space-between"} p={3}>
        <Text fontSize={"24px"} fontWeight={"semibold"} color={"blue.600"}>
          Spell List
        </Text>
        <Box>
          <InputGroup>
            <Input
              type="text"
              placeholder="Search spells..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
            <InputRightAddon bg={"blue.300"}>
              <FaSearch color="white" />
            </InputRightAddon>
          </InputGroup>
        </Box>
      </Flex>
      {/* Add error boundry so that if something went wrong then crash the component only */}
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <SpellList />
      </ErrorBoundary>
    </Box>
  );
};

export default MainPage;
