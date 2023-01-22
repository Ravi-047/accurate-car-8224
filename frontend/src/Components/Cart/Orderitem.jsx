import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

const Orderitem = ({image1,title,dprice,oprice}) => {
  return (
    <>
      <Box m="50px">
        <Flex mt="25px" textAlign="left" gap="40px">
          <Box>
            <Heading size="sm" mb="30px" color="#1e3352">
              ITEM
            </Heading>
            <HStack alignItems="flex-start">
              <Image
                src={image1}
                w="150px"
                mr="15px"
              />
              <Box w="300px">
                <Heading
                  size="sm"
                  mb="30px"
                  color="#1e3352"
                  fontWeight="medium"
                >
                  {title}
                </Heading>
                <Text color="#6d7278">Color: Copper Brown</Text>
                <Text color="#6d7278">Size: Small</Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack alignItems="flex-start">
              <Box mr="25px">
                <Heading size="sm" mb="30px" color="#1e3352">
                  QUANTIY
                </Heading>
                <Text textAlign="center">1</Text>
                <Text color="#59931b" fontWeight="semibold">
                  In Stock
                </Text>
              </Box>
              <Box>
                <Heading size="sm" mb="30px" color="#1e3352">
                  PRICE
                </Heading>
                <Text color="#1e3352" fontWeight="bold" fontSize="sm">
                  ${dprice}
                </Text>
                <Text color="#6d7278" fontSize="sm">
                  {" "}
                  Comp. Value:
                </Text>
                <Text color="#6d7278" fontSize="sm">
                  ${oprice}
                </Text>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Orderitem