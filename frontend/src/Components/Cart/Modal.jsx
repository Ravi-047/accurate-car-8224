import { Button ,Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useDisclosure } from "@chakra-ui/react";
import React from "react";

export function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>

      <Button
        onClick={onOpen}
        mt="30px"
        bgColor="#007800"
        color="white"
        borderRadius="0px"
        fontSize="sm"
        w="300px"
        p="22px"
        _hover={{ bgColor: "#000" }}
      >
        PLACE ORDER
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
