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
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import Items from "./Items";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Billing = () => {
  const data = useSelector((store) => store.cartManager.data);
  if(data.length==0){
    return <Loading />
  }else{

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
          <HStack m="50px" gap="100px" alignItems="flex-start">
            <Box>
              <HStack>
                <Heading color="#1e3352" size="sm">
                  SHIPPING ADDRESS
                </Heading>
                <Text
                  fontWeight="normal"
                  fontSize="12px"
                  textDecoration="underline"
                >
                  Edit
                </Text>
              </HStack>
              <Box color="#6d7278" textAlign="left" mt="20px">
                <Text>Rajesh Pachika</Text>
                <Text>456-78</Text>
                <Text>Phoenix AZ, 85063</Text>
                <Text>United States</Text>
              </Box>
            </Box>
            <Box>
              <HStack>
                <Heading color="#1e3352" size="sm">
                  SHIPPING METHOD
                </Heading>
                <Text
                  fontWeight="normal"
                  fontSize="12px"
                  textDecoration="underline"
                >
                  Edit
                </Text>
              </HStack>
              <Box color="#6d7278" textAlign="left" mt="20px">
                <Text fontWeight="semibold">Economy Ground</Text>
                <Text>Delivered In 3 - 7 Business Days.</Text>
                <Text fontWeight="semibold">$5.00</Text>
              </Box>
            </Box>
          </HStack>
          <Heading
            color="#1e3352"
            textAlign="left"
            size="md"
            fontSize="24px"
            letterSpacing="1.5px"
            mb="10px"
          >
            2. BILLING
          </Heading>
          <Divider borderColor="#a3a3a3" />
          <Box m="30px 50px">
            <Heading color="#1e3352" size="sm">
              CONTACT INFO
            </Heading>
            <HStack mt="25px">
              <Input
                placeholder="Email Address"
                borderRadius="0px"
                h="55px"
                borderColor="#a3a3a3"
                maxW="600px"
              />
            </HStack>
            <Text color="#6d7278" fontSize="xs" mt="10px">
              By signing up you agree to the Terms & Conditions and Privacy
              Policy
            </Text>
            <Heading color="#1e3352" size="sm" mt="20px">
              BILLING ADDRESS
            </Heading>
            <Box mt="20px">
              <Flex
                maxW="600px"
                border="1px solid #dcdcdc"
                alignItems="center"
                justify="space-between"
                p="20px"
              >
                <Flex gap="30px">
                  <input type="radio" />
                  <Box color="#6d7278" textAlign="left">
                    <Text>Rajesh Pachika</Text>
                    <Text>456-78</Text>
                    <Text>Phoenix AZ, 85063</Text>
                    <Text>United States</Text>
                  </Box>
                </Flex>
                <Text textDecoration="underline" fontSize="sm">
                  Edit
                </Text>
              </Flex>
              <Box
                maxW="600px"
                border="1px solid #dcdcdc"
                p="20px"
                borderTop="0px"
              >
                <Flex gap="30px" alignItems="center">
                  <input type="radio" />
                  <Box color="#6d7278" textAlign="left">
                    <Text>Enter New Billing Address</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Heading color="#1e3352" size="sm" mt="20px">
              PAYMENT METHOD
            </Heading>
            <Box mt="20px">
              <VStack
                maxW="600px"
                border="1px solid #dcdcdc"
                p="20px"
                gap="20px"
                alignItems="flex-start"
              >
                <Flex alignItems="center" gap="10px">
                  <input type="radio" />
                  <Image src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dwbbf441ad/images/cc_icon.svg" />
                  <Text>Credit Card</Text>
                </Flex>
                <Select
                  placeholder="Select from saved cards"
                  w="300px"
                  border="1px solid #dcdcdc"
                  borderRadius="0px"
                  h="55px"
                >
                  <option value="option1">Visa</option>
                </Select>
                <Flex gap="20px">
                  <Input
                    placeholder="Name on Card"
                    h="55px"
                    border="1px solid #dcdcdc"
                    borderRadius="0px"
                    w="300px"
                  />
                  <Select
                    placeholder="Visa"
                    w="200px"
                    border="1px solid #dcdcdc"
                    borderRadius="0px"
                    h="55px"
                  >
                    <option value="option1">Visa</option>
                    <option value="option1">American Express</option>
                    <option value="option1">Master Card</option>
                    <option value="option1">Discover</option>
                    <option value="option1">JCB</option>
                  </Select>
                </Flex>
                <Flex gap="20px">
                  <Input
                    placeholder="Card Number"
                    h="55px"
                    border="1px solid #dcdcdc"
                    borderRadius="0px"
                    w="300px"
                  />
                  <Input
                    placeholder="Security Code"
                    h="55px"
                    border="1px solid #dcdcdc"
                    borderRadius="0px"
                    w="200px"
                  />
                </Flex>
              </VStack>
              <Box maxW="600px" border="1px solid #dcdcdc" borderTop="0px">
                <Flex alignItems="center" p="10px 20px" gap="10px">
                  <input type="radio" />
                  <Image
                    w="65px"
                    src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dwa439eb67/images/paypal_icon.png"
                  />
                  <Text color="#6d7278">Pay Pal</Text>
                </Flex>
              </Box>
              <Box maxW="600px" border="1px solid #dcdcdc" borderTop="0px">
                <Flex alignItems="center" p="10px 20px" gap="10px">
                  <input type="radio" />
                  <Image
                    w="65px"
                    src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
                  />
                  <Text color="#6d7278">4 Interest-Free Payments</Text>
                </Flex>
              </Box>
              <Button
                mt="30px"
                bgColor="#007800"
                color="white"
                borderRadius="0px"
                fontSize="sm"
                w="300px"
                p="27px"
                _hover={{ bgColor: "#000" }}
              >
                <Link to="/placeorder">REVIEW ORDER</Link>
              </Button>
            </Box>
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

export default Billing;
