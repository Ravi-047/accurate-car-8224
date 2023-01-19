import React from 'react'
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

const Shipping = () => {
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
            <Heading size="sm" m="30px 0px" color="#1e3352">
              SHIPPING METHOD
            </Heading>
          </Box>
        </Box>
        <Box bgColor="#f7f7f7" w="400px" p="20px" lineHeight="10">
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
            <Text color="#6d7278">$52.23</Text>
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
            <Text color="#6d7278">$61.36</Text>
          </HStack>
          <HStack mt="30px" alignItems="flex-start" textAlign="left" gap="15px">
            <Image
              w="150px"
              src="https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw11145931/62342750_202_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg"
            />
            <Box lineHeight="25px">
              <Heading size="xs" fontWeight="semibold" lineHeight="1.5">
                {" "}
                Long Sleeve Hooded Twill Button-Down Shirt
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
                  $29.98
                </Text>
              </HStack>
            </Box>
          </HStack>
          <Divider borderColor="#a3a3a3" m="20px 0px" />
          <HStack mt="30px" alignItems="flex-start" textAlign="left" gap="15px">
            <Image
              w="150px"
              src="https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw11145931/62342750_202_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg"
            />
            <Box lineHeight="25px">
              <Heading size="xs" fontWeight="semibold" lineHeight="1.5">
                {" "}
                Long Sleeve Hooded Twill Button-Down Shirt
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
                  $29.98
                </Text>
              </HStack>
            </Box>
          </HStack>
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

export default Shipping