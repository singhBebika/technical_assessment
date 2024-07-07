import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import {ReactNode} from "react";

interface IModalProps {
  modalTitle: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const CustomModal = ({modalTitle, isOpen, onClose, children}: IModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"blue.500"} borderBottom={"solid 1px"} borderColor={"gray.300"}>
          {modalTitle}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter borderTop={"solid 1px"} borderColor={"gray.300"}>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CustomModal;
