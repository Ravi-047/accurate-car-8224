import { Image,Box, Text,Grid, Button, Flex, Menu, MenuButton, MenuList, MenuItem, Heading,} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
 import {AiOutlineShopping} from "react-icons/ai"
 import {HiOutlineArrowsUpDown} from "react-icons/hi2"

import FilterModel from './FilterModel';
const Women = () => {

    const [data, setData] = useState([]);
 const [filter, setfilter] = useState("featured");

    //Get Method - is used to display data 
    useEffect(()=>{
        apiGet()
      },[])
    const apiGet = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    };

console.log(data)




  return (
    <div>
  <Box w={'75%'} m='auto'>
<Flex flexDirection={'row'} justifyContent='space-between'>
<FilterModel/>
<Box w='25%' >
  <Flex justifyContent={'space-between'} gap={4}>
    <Box textAlign={'center'}>
       <Heading fontSize={'20px'} paddingTop={2} color='gray.400'>({data.length}items)</Heading> 
    </Box>
    
     <Menu>
  <MenuButton  as ={Button}colorScheme='blue' w='100%'  border={'2px solid black'} bgColor='white' color={'black'} borderRadius={"18px"} rightIcon={<HiOutlineArrowsUpDown color='black'/>} gap={12}>Best Seller </MenuButton>
  <MenuList borderRadius={'12px'} border='1px solid black'mt={-2} w='100%'  >
    <MenuItem fontWeight='bold' >Featured</MenuItem>
    <hr/>
    <MenuItem fontWeight='bold'>Best Seller</MenuItem>
    <hr/>
    <MenuItem fontWeight='bold'>Price High to Low</MenuItem>
    <hr/>
    <MenuItem fontWeight='bold'>Price Low to High</MenuItem>
    <hr/>
  </MenuList>
</Menu>
  </Flex>
</Box>

</Flex>
</Box>
 <Grid templateColumns='repeat(4, 1fr)' gap={1} mt={0} w={'80%'} m='auto'>
        {
    data.map((item)=>{
        return(
        <Box className="imagecontainer" w="90%" m='auto' align={'center'} key={item.id}  bgColor='gray.100'mt={4} >
        <Image h='320px' w={'100%'}bgColor='gray.200' src={item.image} alt='img' mt='2'/>
     
     <Box display={'flex'} justifyContent='space-between' mt={2}>
         <Text color={'#cc1632'} fontWeight='bold' >New !</Text>
         <Box cursor={"pointer"} _hover={{backgroundColor:'green.300'}} borderRadius={'18%'} w='15%' align='center' mr={2}>
         <AiOutlineShopping/>
             {/* <Image cursor={'pointer'} src='https://img.icons8.com/external-anggara-detail-outline-anggara-putra/24/null/external-add-to-cart-retail-anggara-detail-outline-anggara-putra.png'/> */}
         </Box> 
         </Box>
         <Box>
      <Box textAlign={'left'}>
      <Text>Yin-Yang Peace Graphic Tee</Text>
      <Box display={'flex'} justifyContent='flex-start' gap={2}>
        
          <Text alignItems={'left'} fontSize={"20px"} fontWeight='bold'>${item.price}</Text> 
         <Text color={'gray'} fontWeight='bold'>Comp. Value: $24.95</Text>
      </Box>
      <Text color={'#cc1632'} fontWeight='bold'>Buy 1, Get 2 Free Tees</Text>
      </Box>
       </Box>
      </Box>
  )
})
}
    </Grid>
  {/* </div> */}
       
      
    </div>
  );
}

export default Women;
