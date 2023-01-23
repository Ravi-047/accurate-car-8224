import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import OrderSummary from "./OrderSummary";
import Orderitem from "./Orderitem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

const Order = () => {
  const data = useSelector((store) => store.cartManager.data);
  const price = useSelector((store) => store.cartManager.price);
  const toast = useToast();
  const navigate = useNavigate();

  const orderpalced = () => {
    toast({
      title: "Thank you for placing order",
      description: "Order placed Succesfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
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
          <HStack m="50px" gap="100px" alignItems="flex-start">
            <Box>
              <HStack>
                <Heading color="#1e3352" size="sm">
                  BILLING ADDRESS
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
                  PAYMENT METHOD
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
                <Text>Credit Card</Text>
                <Text>Rajesh</Text>
                <Text>Visa</Text>
                <Text>************1881</Text>
                <Text>Exp. 09.2029</Text>
                <Text>Amount: $36.66</Text>
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
            3. PLACE ORDER
          </Heading>
          <Divider borderColor="#a3a3a3" />
          <Box>
            {data.map((item) => {
              return <Orderitem {...item} />;
            })}
          </Box>

          {/* <Box m="50px">
            <Flex mt="25px" textAlign="left" gap="40px">
              <Box>
                <Heading size="sm" mb="30px" color="#1e3352">
                  ITEM
                </Heading>
                <HStack alignItems="flex-start">
                  <Image
                    src="https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw11145931/62342750_202_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg"
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
                      Long Sleeve Hooded Twill Button-Down Shirt
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
                      $29.98
                    </Text>
                    <Text color="#6d7278" fontSize="sm">
                      {" "}
                      Comp. Value:
                    </Text>
                    <Text color="#6d7278" fontSize="sm">
                      $59.95
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </Box> */}
          <Box w="300px" ml="auto" lineHeight="30px" mr="10%">
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
              <Text color="#6d7278">Order Total</Text>
              <Text color="#6d7278">${price + 5.0 + 4.13}</Text>
            </HStack>
            <Button
              mt="30px"
              bgColor="#007800"
              color="white"
              borderRadius="0px"
              fontSize="sm"
              w="300px"
              p="22px"
              _hover={{ bgColor: "#000" }}
              onClick={orderpalced}
            >
              PLACE ORDER
            </Button>
          </Box>
        </Box>
        <Box bgColor="#f7f7f7" w="400px" p="20px" lineHeight="10">
          <OrderSummary />
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
          <Button
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
        </Box>
      </Flex>
    </Box>
  );
        }
};

export default Order;
