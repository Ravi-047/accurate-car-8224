import React from 'react';

import { Button,
        Modal,
        ModalCloseButton,
        ModalContent, ModalHeader,
        ModalOverlay,
        useDisclosure ,
        ModalBody,
        Accordion,
        AccordionItem,
        AccordionButton,
        AccordionPanel,
        AccordionIcon,Box, Grid, Text} from '@chakra-ui/react';
import {BiFilter} from "react-icons/bi"

const Size = [

    "O/S","XXS","XS","S","M","L","XL","XXL","s","L","S","L","S","0L","2S","2L","4S"," 4","4L ","6S ","6 "," 6L ","7 ","8S ","8 "," 8L ",
    "9 ","10S ","10 "," 10L ","12S ","12 "," 12L ","14S ","14 "," 14L ","16S ","16 "," 16L ","18S ","18"
  ];
const Colors = [

    "red","blue","teal","green","yellow","pink","orange","brown","orange.300","red.300",
    "gray","black","white","blue.300","blue.100","red.600","green.300","blue.600"
  ];




const FilterModel = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(Size)
        return (
    <>
      <Button  onClick={onOpen} colorScheme='blue' w='15%'  border={'2px solid black'} bgColor='white' color={'black'} borderRadius={"18px"} leftIcon={<BiFilter color='black'/>} gap={2} >Show Filter </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
      
        <ModalOverlay />
        <ModalContent >
         <Button   colorScheme='green' w='30%' mt={1}  border={'2px solid black'} bgColor='white' color={'black'} borderRadius={"18px"} ml={8}>Apply Filter </Button>
          <ModalCloseButton />
          <ModalBody>
            {/* //Filter apply Here */}
          <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
    <h2>
      <AccordionButton bgColor={'green.100'}>
        <Box as="span" flex='1' textAlign='left' >
          <Text fontWeight={'bold'}>Choose Sizes</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Grid templateColumns='repeat(6, 1fr)' gap={4} mt={0} w={'90%'} m='auto'>
        {
            Size.map((e,i)=>{
                return (
                      <Box border={'1px solid black'} borderRadius='100px' cursor={'pointer'} _hover={{bgColor:"teal"}} key={i}>
                <Text align={'center'} fontWeight='bold' >{e}</Text>
            </Box>
                )
            })
        }  
        </Grid>
  
    </AccordionPanel>
  </AccordionItem>

  {/* //Second Filter Here */}

  <AccordionItem >
    <h2>
      <AccordionButton bgColor={'green.100'}>
        <Box as="span" flex='1' textAlign='left'>
          Choose Colors
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

 <Grid templateColumns='repeat(6, 1fr)' gap={4} mt={0} w={'90%'} m='auto'>
        {
            Colors.map((e,i)=>{
                return (
                      <Box border={'1px solid black'} borderRadius='100px' cursor={'pointer'} fontWeight='bold' backgroundColor={e} h={8} key={i}>
            </Box>
                )
            })
        }  
        </Grid> 

    </AccordionPanel>
  </AccordionItem>

  </Accordion>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>

  );
}

export default FilterModel;



