import React from "react";

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deletecartitems, getcartitems, quantiy } from "../../Redux/cart/cart.actions";

const CartItem = ({ image1, title, dprice, oprice, _id, handleRemove }) => {
  const qty=useSelector((store)=>store.cartManager.qty);
  console.log(qty);
  const dispatch=useDispatch();

    const handleQuantity=(e,id,dprice)=>{
      dispatch(quantiy(e.target.value,id,+dprice));
    }
  return (
    <Box maxW={["300px", "900px"]} m={["20px", "0px"]}>
      <Flex mt="25px" textAlign="left" gap="40px" wrap="wrap" maxW="900px">
        <Box>
          <Heading size="sm" mb="30px" color="#1e3352">
            ITEM
          </Heading>
          <HStack alignItems="flex-start">
            <Image src={image1} w={["100px", "200px"]} mr="15px" />
            <Box w="300px">
              <Heading
                size="sm"
                mb="30px"
                color="#1e3352"
                fontWeight="medium"
                maxW="200px"
              >
                {title}
              </Heading>
              <Text color="#6d7278">Color: Copper Brown</Text>
              <Text color="#6d7278">Size: Small</Text>
              <RadioGroup mt="20px">
                <Stack>
                  <Radio value="1">Ship To Me</Radio>
                  <Radio value="2">In-Store Pickup</Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </HStack>
        </Box>
        <Box ml={["20px", "0px"]}>
          <HStack alignItems="flex-start">
            <Box mr="25px">
              <Heading size="sm" mb="30px" color="#1e3352">
                QUANTIY
              </Heading>
              <Select placeholder="1" onClick={(e)=>handleQuantity(e,_id,dprice)}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
              <Text
                color="#1e3352"
                my="20px"
                cursor="pointer"
                textDecoration="underline"
                onClick={(e) => {
                  handleRemove(_id);
                }}
              >
                Remove
              </Text>
              <Text color="#59931b" fontWeight="bold">
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
  );
};

export default CartItem;
