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
import { useSelector } from "react-redux";
import Items from "./Items";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Shipping = () => {
  const data = useSelector((store) => store.cartManager.data);
  if (data.length == 0) {
    return <Loading />;
  } else {
    return (
      <Box p="10px">
        <Flex gap="20px" justify="space-between">
          <Box w="800px" textAlign="left">
            <Heading
              color="#1e3352"
              textAlign="left"
              size="md"
              fontSize="24px"
              letterSpacing="1.5px"
              mb="10px"
            >
              1.SHIPPING
            </Heading>
            <Divider borderColor="#a3a3a3" />
            <Box w="80%" m="15px auto" lineHeight="100px">
              <Heading size="sm" mb="30px" color="#1e3352">
                SHIPPING ADDRESS
              </Heading>
              <HStack>
                <Input
                  placeholder="First Name"
                  borderRadius="0px"
                  h="55px"
                  borderColor="#a3a3a3"
                />
                <Input
                  placeholder="Last Name"
                  borderRadius="0px"
                  h="55px"
                  borderColor="#a3a3a3"
                />
              </HStack>
              <Input
                placeholder="Address 1"
                borderRadius="0px"
                h="55px"
                borderColor="#a3a3a3"
              />
              <Input
                placeholder="Apt, Suite, Etc. (optional)"
                borderRadius="0px"
                h="55px"
                borderColor="#a3a3a3"
              />
              <HStack>
                <Input
                  placeholder="India"
                  borderRadius="0px"
                  h="55px"
                  borderColor="#a3a3a3"
                />
                <Input
                  placeholder="Zip Code"
                  borderRadius="0px"
                  h="55px"
                  borderColor="#a3a3a3"
                />
              </HStack>
              <HStack mt="20px">
                <Input
                  placeholder="City"
                  borderRadius="0px"
                  h="55px"
                  borderColor="#a3a3a3"
                />
                <Input
                  placeholder="State"
                  borderRadius="0px"
                  h="55px"
                  borderColor="#a3a3a3"
                />
              </HStack>
              <Button
                mt="30px"
                bgColor="#007800"
                color="white"
                borderRadius="0px"
                fontSize="md"
                w="300px"
                p="27px"
                _hover={{ bgColor: "#000" }}
              >
                <Link to="/billing">CONTINUE TO BILLING</Link>
              </Button>
            </Box>
          </Box>
          <Box bgColor="#f7f7f7" w="400px" p="20px" lineHeight="10">
            <OrderSummary />
            <Box>
              {data.map((item) => {
                return <Items {...item} />;
              })}
            </Box>
            <Box border="1px solid black" mt="30px" p="20px" bgColor="white">
              <Heading size="sm" fontWeight="semibold" lineHeight="1.5">
                {" "}
                Help?
              </Heading>
              <Heading
                size="xs"
                fontWeight="semibold"
                lineHeight="1.5"
                textAlign="left"
                textDecoration="underline"
              >
                {" "}
                1-877-289-2376
              </Heading>
              <Heading
                size="sm"
                fontWeight="semibold"
                lineHeight="1.5"
                m="15px auto"
              >
                {" "}
                Phone hours 8AM EST - 12:00AM EST Chat 9AM EST - 12:00AM EST
              </Heading>
              <Heading
                size="xs"
                fontWeight="semibold"
                lineHeight="1.5"
                m="15px auto"
              >
                {" "}
                Paying with PayPal? In-Store Returns will be refunded as
                Merchandise Credit.
              </Heading>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
};

export default Shipping;
