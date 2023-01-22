import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

const Items = ({image1, title,dprice}) => {


  return (
    <>
      <HStack mt="30px" alignItems="flex-start" textAlign="left" gap="15px">
        <Image
          w="150px"
          src={image1}
        />
        <Box lineHeight="25px">
          <Heading size="xs" fontWeight="semibold" lineHeight="1.5">
            {title}
          </Heading>
          <HStack gap="20px" mt="25px">
            <Text color="#6d7278" fontWeight="semibold" fontSize="sm">
              {" "}
              Color:
            </Text>
            <Text color="#6d7278" fontSize="sm">
              {" "}
              Copper Brown
            </Text>
          </HStack>
          <HStack gap="30px">
            <Text color="#6d7278" fontWeight="semibold" fontSize="sm">
              {" "}
              Size:
            </Text>
            <Text color="#6d7278" fontSize="sm">
              {" "}
              Small
            </Text>
          </HStack>
          <HStack gap="23px">
            <Text color="#6d7278" fontWeight="semibold" fontSize="sm">
              {" "}
              Qty: 1
            </Text>
            <Text color="#6d7278" fontSize="sm" fontWeight="semibold">
              {" "}
              ${dprice}
            </Text>
          </HStack>
        </Box>
      </HStack>
      <Divider borderColor="#a3a3a3" m="20px 0px" />
    </>
  );
};

export default Items;
