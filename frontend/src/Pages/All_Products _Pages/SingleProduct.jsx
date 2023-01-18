import { Box, Flex, Grid, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

const SingleProduct = () => {
  return (
    <div>
      <Box>
        <Flex>
            <Box>
                <Grid templateColumns='repeat(2, 1fr)'gap={1}>
                <Image src='https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dwa09905e3/86749439_007_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg' alt='1'/>
                <Image src='https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dwa09905e3/86749439_007_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg' alt='1'/>
                <Image src='https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dwa09905e3/86749439_007_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg' alt='1'/>
                <Image src='https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dwa09905e3/86749439_007_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg' alt='1'/>
                </Grid>
            </Box>
            <Box>
                <Link textDecoration='none'>Women</Link>
            <br/>

        <Text color='red.700' fontWeight='bold'>Limited Edition</Text>
        <Text  fontWeight='bold'>Straight Cargo Pants</Text>
        <Box display={'flex'} justifyContent='flex-start' gap={2}>
        
          <Text alignItems={'left'} fontSize={"20px"} fontWeight='bold'>${32.00}</Text> 
         <Text color={'gray'} fontWeight='bold'>Comp. Value: $24.95</Text>
      </Box>
        <Text color='red.700' fontWeight='bold'>Color: Black Fox</Text>
        <Flex gap={4}>
                 <Box h='30px' w='30px' bgColor='black' borderRadius={'100px'}></Box>
        <Box h='30px' w='30px' bgColor='pink' borderRadius={'100px'}></Box>
        <Box h='30px' w='30px' bgColor='red' borderRadius={'100px'}></Box>
        <Box h='30px' w='30px' bgColor='yellow' borderRadius={'100px'}></Box>
        </Flex>
        </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default SingleProduct;
