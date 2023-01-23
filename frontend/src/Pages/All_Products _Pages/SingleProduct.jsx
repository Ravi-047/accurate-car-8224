import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { GiConsoleController } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import {
  addcartitems,
  deletecartitems,
  getcartitems,
} from "../../Redux/cart/cart.actions";

const datas = [
  {
    image:
      "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw265698b0/87739413_007_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
    title: "Bomber Jacket",
    Price: 39.98,
    colors: 2,
    compValue: 79.5,
  },
  {
    image:
      "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw5d72ec6d/67630812_500_alt3.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
    title: "Bomber Jacket",
    Price: 39.98,
    colors: 2,
    compValue: 79.5,
  },
  {
    image:
      "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw051cc751/87731606_007_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
    title: "Bomber Jacket",
    Price: 39.98,
    colors: 2,
    compValue: 79.5,
  },
  {
    image:
      "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw265698b0/87739413_007_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
    title: "Bomber Jacket",
    Price: 39.98,
    colors: 2,
    compValue: 79.5,
  },
];
const placeOrder = () => {};

const SingleProduct = () => {
  const [data, setData] = useState([]);
  const [cartData, setCartdata] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartdata = useSelector((store) => store.cartManager.data);
  // console.log(cartdata);
  const toast=useToast();
  const handleAddtocart = () => {
    console.log(cartData);
    dispatch(addcartitems(cartData));
          toast({
            title: "Item added to bag",
            description: "Successfuly added to cart",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
  };

  useEffect(() => {
    async function fetchData(id) {
      await fetch(`https://harlequin-deer-kilt.cyclic.app/product/get/${id}`)
        .then((response) => response.json())
        .then((json) => {
          setCartdata(json[0]);
          // console.log(json);
          setData(json);
        });
    }
    fetchData(id);

    dispatch(getcartitems());
  }, [id]);

  if (data.length == 0) {
    return <Loading />;
  } else {
    return (
      <div>
        <Box>
          <Flex w={"90%"} m="auto" gap={4}>
            {data?.map((e, index) => {
              return (
                <>
                  <Box key={index}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                      <Image w="100%" h={"98%"} src={e.image1} alt="1" />
                      <Image w="100%" h={"98%"} src={e.image2} alt="1" />
                      <Image w="100%" h={"98%"} src={e.image3} alt="1" />
                      <Image w="100%" h={"98%"} src={e.image4} alt="1" />
                    </Grid>
                  </Box>

                  <Box w="40%">
                    <Link textDecoration="none" fontWeight={"bold"}>
                      Women
                    </Link>
                    <br />

                    <Text color="red.700" fontWeight="bold">
                      Limited Edition
                    </Text>
                    <Text fontWeight="bold">{e.title}</Text>
                    <Box display={"flex"} justifyContent="flex-start" gap={2}>
                      <Text
                        alignItems={"left"}
                        fontSize={"20px"}
                        fontWeight="bold"
                      >
                        ${e.dprice}
                      </Text>
                      <Text color={"gray"} fontWeight="bold">
                        Comp. Value: ${e.oprice}
                      </Text>
                    </Box>
                    <Text color="red.700" fontWeight="bold">
                      Color: Black Fox
                    </Text>
                    <Flex gap={4} mt={3}>
                      <Box
                        h="30px"
                        w="30px"
                        bgColor="black"
                        borderRadius={"100px"}
                      ></Box>
                      <Box
                        h="30px"
                        w="30px"
                        bgColor="pink"
                        borderRadius={"100px"}
                      ></Box>
                      <Box
                        h="30px"
                        w="30px"
                        bgColor="red"
                        borderRadius={"100px"}
                      ></Box>
                      <Box
                        h="30px"
                        w="30px"
                        bgColor="yellow"
                        borderRadius={"100px"}
                      ></Box>
                    </Flex>

                    <Text color="red.700" fontWeight="bold" mt={3}>
                      Color: Black Fox
                    </Text>
                    <Flex gap={4} mt={3}>
                      <Box
                        h="30px"
                        w="30px"
                        borderRadius={"100px"}
                        textAlign="center"
                      >
                        <Text fontWeight={"bold"}>S</Text>
                      </Box>
                      <Box
                        h="30px"
                        w="30px"
                        borderRadius={"100px"}
                        textAlign="center"
                      >
                        <Text fontWeight={"bold"}>XS</Text>
                      </Box>
                      <Box
                        h="30px"
                        w="30px"
                        borderRadius={"100px"}
                        textAlign="center"
                      >
                        <Text fontWeight={"bold"}>M</Text>
                      </Box>
                      <Box
                        h="30px"
                        w="30px"
                        borderRadius={"100px"}
                        textAlign="center"
                      >
                        <Text fontWeight={"bold"}>L</Text>
                      </Box>
                      <Box
                        h="30px"
                        w="30px"
                        borderRadius={"100px"}
                        textAlign="center"
                      >
                        <Text fontWeight={"bold"}>XL</Text>
                      </Box>
                      <Box
                        h="30px"
                        w="30px"
                        borderRadius={"100px"}
                        textAlign="center"
                      >
                        <Text fontWeight={"bold"}>XXL</Text>
                      </Box>
                    </Flex>
                    <Box mt={3}>
                      <Button
                        outline={"1px solid black"}
                        borderRadius="35px"
                        w="100%"
                        m="auto"
                        onClick={() => handleAddtocart()}
                      >
                        ADD TO BAG
                      </Button>
                    </Box>

                    {/* //Product Description  */}

                    <Accordion defaultIndex={[0]} allowMultiple mt={7}>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            bgColor={"blue.100"}
                            borderRadius={"30px"}
                            _hover={{ bgColor: "blue.100" }}
                          >
                            <Box as="span" flex="1" textAlign="left">
                              <Text fontWeight={"bold"}>
                                Product Description{" "}
                              </Text>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Box>
                            <Text color="black" fontWeight={"semibold"}>
                              An iconic style with plenty of urban attitude.
                              Which coast will you rep?
                            </Text>
                            <br />
                            <Text color="black" fontWeight={"semibold"}>
                              Details
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              # Woven fabric
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Snap placket
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Front & back New York or Los Angeles California
                              graphics
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Angled front pockets
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Rib-knit collar, cuffs & hem
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Style: 1606
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Imported
                            </Text>
                            <Text color="black" fontWeight={"semibold"}>
                              Fit
                            </Text>

                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Oversized fit
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Low-cut knit collar
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Approx. length (M): 27.25"
                            </Text>
                            <Text color="black" fontWeight={"semibold"}>
                              Care & Materials
                            </Text>

                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Shell/lining: 100% polyester
                            </Text>
                            <Text
                              color="gray.600"
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              #Machine wash/dry
                            </Text>
                          </Box>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                </>
              );
            })}
          </Flex>

          <Box w={"90%"} m="auto" mt={12}>
            <Box>
              <Heading fontSize={20}>You May Also Like</Heading>
            </Box>

            {/* //card product           */}
            <Grid templateColumns="repeat(4, 1fr)" gap={3} w={"100%"} m="auto">
              {datas.map((item, index) => {
                return (
                  <Box
                    className="imagecontainer"
                    w="100%"
                    m="auto"
                    align={"center"}
                    key={index}
                    bgColor="gray.100"
                    mt={12}
                  >
                    <Image
                      h="320px"
                      w={"100%"}
                      bgColor="gray.200"
                      src={item.image}
                      alt="img"
                      mt="2"
                    />

                    <Box display={"flex"} justifyContent="space-between" mt={2}>
                      <Text color={"#cc1632"} fontWeight="bold">
                        New !
                      </Text>
                      <Box
                        cursor={"pointer"}
                        _hover={{ backgroundColor: "green.300" }}
                        borderRadius={"18%"}
                        w="15%"
                        align="center"
                        mr={2}
                      >
                        <AiOutlineShopping />
                        {/* <Image cursor={'pointer'} src='https://img.icons8.com/external-anggara-detail-outline-anggara-putra/24/null/external-add-to-cart-retail-anggara-detail-outline-anggara-putra.png'/> */}
                      </Box>
                    </Box>
                    <Box>
                      <Box textAlign={"left"}>
                        <Text>{item.title}</Text>
                        <Box
                          display={"flex"}
                          justifyContent="flex-start"
                          gap={2}
                        >
                          <Text
                            alignItems={"left"}
                            fontSize={"20px"}
                            fontWeight="bold"
                          >
                            ${item.Price}
                          </Text>
                          <Text color={"gray"} fontWeight="bold">
                            Comp. Value: ${item.compValue}
                          </Text>
                        </Box>
                        <Text color={"green"} fontWeight="bold">
                          {item.colors} colors
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Box>
        </Box>
        {/* //<Footer/> */}
        foooter
      </div>
    );
  }
};

export default SingleProduct;
