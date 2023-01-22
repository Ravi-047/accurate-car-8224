import React from 'react';
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
import { useSelector } from 'react-redux';

const OrderSummary = () => {

  const price = useSelector((store) => store.cartManager.price);


  return (
    <>
      <Heading
        color="#1e3352"
        textAlign="left"
        size="lg"
        fontSize="24px"
        letterSpacing="1.5px"
        mb="20px"
      >
        ORDER SUMMARY
      </Heading>
      <HStack justifyContent="space-between" fontSize="sm">
        <Text color="#6d7278">Subtotal</Text>
        <Text color="#6d7278">${price}</Text>
      </HStack>
      <HStack justifyContent="space-between" fontSize="sm">
        <Text color="#6d7278">Shipping Economy Ground</Text>
        <Text color="#6d7278">$5.00</Text>
      </HStack>
      <HStack justifyContent="space-between" fontSize="sm">
        <Text color="#6d7278">Sales Tax</Text>
        <Text color="#6d7278">$4.13</Text>
      </HStack>
      <HStack
        justifyContent="space-between"
        fontWeight="semibold"
        fontSize="sm"
      >
        <Text color="#6d7278">Estimated Total</Text>
        <Text color="#6d7278">${price + 5.0 + 4.13}</Text>
      </HStack>
    </>
  );
}

export default OrderSummary