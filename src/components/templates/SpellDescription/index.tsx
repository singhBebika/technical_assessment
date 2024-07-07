import {Box, Button, Flex, Text, useDisclosure} from "@chakra-ui/react";
import CustomModal from "@src/components/common/CustomModal";
import Loader from "@src/components/common/Loader";
import {useAppDispatch, useAppSelector} from "@src/hooks/redux";
import {fetchSingleSpell} from "@src/redux/action/spellAction";
import {useEffect} from "react";
import {FaAngleLeft} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";

const SpellDescription = () => {
  const navigate = useNavigate();
  const {singleSpell, isLoading} = useAppSelector((state) => state.spellDesc);
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();
  const {onOpen, isOpen, onClose} = useDisclosure();
  const id = pathname.split("/")[pathname.split("/").length - 1];

  useEffect(() => {
    dispatch(fetchSingleSpell(id ?? ""));
  }, [dispatch, id]);

  const formattedData = [
    {label: "Name", value: singleSpell.name},
    {label: "Level", value: singleSpell.level},
    {label: "Duration", value: singleSpell.duration},
    {label: "Range", value: singleSpell.range},
    {label: "Material", value: singleSpell.material},
    {label: "Casting Time", value: singleSpell.casting_time},
    {label: "Description", value: singleSpell.desc},
  ];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box m={3}>
      <Flex alignItems={"center"} mb={3} gap={4}>
        <Button leftIcon={<FaAngleLeft />} bg="blue.200" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Text fontWeight={"semibold"} color={"blue.500"}>
          {singleSpell.name}'s Description`
        </Text>
      </Flex>
      <Box border={"solid 1px"} borderColor={"gray.300"}>
        {formattedData?.map((item, index) => (
          <Flex p={3} background={index % 2 === 0 ? "gray.200" : "white"}>
            <Text fontWeight={"semibold"} flex="0.2" minW={"100px"}>
              {item.label}
            </Text>
            {item.label === "Description" ? (
              <Box flex={"0.8"}>
                <Text noOfLines={2}>{singleSpell.desc?.map((itmm) => itmm)}</Text>
                {singleSpell.desc && (
                  <Text cursor={"pointer"} color="blue" fontSize={"14px"} onClick={onOpen}>
                    Read More
                  </Text>
                )}
              </Box>
            ) : (
              <Text flex={"0.8"}>{item.value}</Text>
            )}
          </Flex>
        ))}
        <CustomModal
          modalTitle={`${singleSpell.name}'s Description`}
          isOpen={isOpen}
          onClose={onClose}
        >
          {singleSpell.desc?.map((itmm, index) => (
            <Flex gap={2} mb={2}>
              <Text>{index + 1}</Text>
              <Text>{itmm}</Text>
            </Flex>
          ))}
        </CustomModal>
      </Box>
    </Box>
  );
};
export default SpellDescription;
