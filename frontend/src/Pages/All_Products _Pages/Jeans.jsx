import {
  Image,
  Box,
  Text,
  Grid,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import React, {  useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";

import FilterModel from "./FilterModel";

const Jeans = () => {
  const [data, setData] = useState([]);
  // const [filter, setfilter] = useState("tops");
  const navigate = useNavigate();
  //Get Method - is used to display data
  useEffect(() => {
    async function fetchData() {
      // console.log(filter)
      await fetch(`https://harlequin-deer-kilt.cyclic.app/product/get`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    }
    fetchData();
  }, []);

  const handleOnNextpage = (id) => {
    navigate(`/clearence/${id}`);
  };
  if (data.length == 0) {
    return <Loading />;
  } else {
    return (
      <div>
        <Box w={"75%"} m="auto">
          <Flex flexDirection={"row"} justifyContent="space-between">
            <FilterModel />
            <Box w="25%">
              <Flex justifyContent={"space-between"} gap={4}>
                <Box textAlign={"center"}>
                  <Heading fontSize={"20px"} paddingTop={2} color="gray.400">
                    ({data.length}items)
                  </Heading>
                </Box>

                <Menu>
                  <MenuButton
                    as={Button}
                    colorScheme="blue"
                    w="100%"
                    border={"2px solid black"}
                    bgColor="white"
                    color={"black"}
                    borderRadius={"18px"}
                    rightIcon={<HiOutlineArrowsUpDown color="black" />}
                    gap={12}
                  >
                    Best Seller{" "}
                  </MenuButton>
                  <MenuList
                    borderRadius={"12px"}
                    border="1px solid black"
                    mt={-2}
                    w="100%"
                  >
                    <MenuItem fontWeight="bold">Featured</MenuItem>
                    <hr />
                    <MenuItem fontWeight="bold">Best Seller</MenuItem>
                    <hr />
                    <MenuItem fontWeight="bold">Price High to Low</MenuItem>
                    <hr />
                    <MenuItem fontWeight="bold">Price Low to High</MenuItem>
                    <hr />
                  </MenuList>
                </Menu>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={1}
          mt={0}
          w={"80%"}
          m="auto"
        >
          {data.map((item) => {
            return (
              <Box
                className="imagecontainer"
                w="90%"
                m="auto"
                align={"center"}
                key={item._id}
                bgColor="gray.100"
                mt={4}
                onClick={() => handleOnNextpage(item._id)}
              >
                <Image
                  h="320px"
                  w={"100%"}
                  bgColor="gray.200"
                  src={item.image1}
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
                  </Box>
                </Box>
                <Box>
                  <Box textAlign={"left"}>
                    <Text>{item.title}</Text>
                    <Box display={"flex"} justifyContent="flex-start" gap={2}>
                      <Text
                        alignItems={"left"}
                        fontSize={"20px"}
                        fontWeight="bold"
                      >
                        ${item.dprice}
                      </Text>
                      <Text color={"gray"} fontWeight="bold">
                        Comp. Value: ${item.oprice}
                      </Text>
                    </Box>
                    <Text color={"#cc1632"} fontWeight="bold">
                      Buy 1, Get 2 Free Tees
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
        {/* </div> */}
      </div>
    );
  }
};

export default Jeans;
