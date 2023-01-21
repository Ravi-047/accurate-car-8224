import React from "react";
import {Flex,Link,Text,Accordion,Image,AccordionItem,AccordionIcon,AccordionButton, AccordionPanel,FormControl, FormLabel, Input, Box,FormHelperText,FormErrorMessage, Checkbox,Button, Select } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Show, Hide } from '@chakra-ui/react'

const Signup = () => {
  return (
    <>
    <Flex>
<Box  bg={"gray.100"}  style={{position:"fixed"}}>
<Accordion allowMultiple mb={"10px"}>
  <AccordionItem>
    <h2>
      <AccordionButton bg={"gray.100"} >
        <Box   as="span" flex='1' textAlign='left' fontWeight={"620"} fontSize={"25px"} border={"none"} >
          ACCOUNT SETTINGS
        </Box>
        <AccordionIcon ml={"30px"}  />
      </AccordionButton>
    </h2>
    <AccordionPanel >
  <Link to={"/signup"}  fontSize="20px" >Create Account</Link>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box mt={"20px"} as="span" flex='1' fontWeight={"620"} textAlign='left'  fontSize={"25px"}>
          SHOP CONFIDENTLY
        </Box>
        <AccordionIcon ml={"30px"} />
      </AccordionButton>
    </h2>
    <AccordionPanel >
  <Link fontSize={"20px"}>  privacy Policy</Link> 
    </AccordionPanel>
    <AccordionPanel >
   <Link  fontSize={"20px"}>  Secure Shopping</Link> 
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Text fontWeight={"620"} fontSize={"30px"} ml={"30px"} >Need Help ?</Text> 
<Text fontWeight={"620"} fontSize={"30px"} ml={"30px"} >Live Chat</Text> 

<Text fontWeight={"420"} fontSize={"20px"} mb={"10px"} mt={"20px"} ml={"30px"}>9 AM to 11 PM EST</Text>
<Text fontWeight={"420"} fontSize={"20px"} mb={"10px"} mt={"20px"} ml={"30px"}>7 Days a Week</Text>
<Text fontWeight={"420"} fontSize={"20px"} mb={"10px"} mt={"20px"} ml={"30px"}>Call Us</Text>
<Text fontWeight={"420"} fontSize={"20px"} mb={"10px"} mt={"20px"} ml={"30px"}>CALL TODAY TOLL FREE</Text>
<Text fontWeight={"420"} fontSize={"20px"} mb={"10px"} mt={"20px"} ml={"30px"}>Available 8 AM to 2 AM EST</Text>
<Text fontWeight={"420"} fontSize={"20px"} mb={"10px"} mt={"20px"} ml={"30px"}>1-877-289-2376</Text>

</Box>
 





 <Box ml={"38%"}>
  <Text fontWeight={"430"}  fontSize={"50px"}> Create An Account  </Text>
  <hr />
  <Flex>
  <Box>
        <FormControl mt={"20px"}>
          <FormLabel  mt={"20px"} fontSize={"30px"}>First Name *</FormLabel>
          <Input isRequired height="60px" width="400px" fontSize="20px" type="text" />
     

          <FormLabel mt={"20px"} fontSize={"30px"}>Last Name *</FormLabel>
          <Input height="60px" width="400px" fontSize="20px" type="text" />

          <FormLabel mt={"20px"} fontSize={"30px"}>Phone *</FormLabel>
          <Input height="60px" width="400px" fontSize="20px" type="text" placeholder="Enter Phone Number" />

          <FormLabel mt={"20px"} fontSize={"30px"} >
            Select Gender *
            <br />
          <select   style={{height:"60px",width:"400px",fontSize:"20px" , border:"1px solid grey"}} placeholder="Gender">
            <option  >Male</option>
            <option>Female</option>
          </select>
          </FormLabel>

          <FormLabel  mt={"20px"} fontSize={"30px"}>DOB *</FormLabel>
          <Input height="60px" width="400px" fontSize="20px" type="date" />
          
          <FormLabel mt={"20px"} fontSize={"30px"}> E-mail *</FormLabel>
          <Input height="60px" width="400px" fontSize="20px" type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormErrorMessage>Email is required.</FormErrorMessage>


          <FormLabel mt={"20px"} fontSize={"30px"}>Password *</FormLabel>
          <Input height="60px" width="400px" fontSize="20px" type="password" Show />

          <FormLabel mt={"20px"} fontSize={"30px"}>Confirm Password *</FormLabel>
          <Input height="60px" width="400px" fontSize="20px" type="password" />
          
        </FormControl>
        <Checkbox mt={"20px"}  defaultChecked>Please Add Me To Aeropostale's Email List. Aeropostale Does Not Share Or Sell Personal Info.</Checkbox>
        <br />
      <Button mt={"20px"} height={"50px"} fontSize={"20px"}  borderRadius={"20px"} width={"200px"} bgColor={"blue.600"}> Apply</Button>
      </Box>
      <Box position={"fixed"} mr={"10%"} ml={"30%"}>
        <Text fontWeight={"500"} mt={"30px"}  fontSize={"30px"}>SignUp with Facebook</Text>
        <hr/>
        <Box >

        <Text fontWeight={"500px"} mt={"20px"} fontSize={"20px"}>Register quickly and easily with your facebook account.  You won't have to remember an extra user name or password
</Text>

        </Box>
        <Box  >
          <Link href="https://www.facebook.com">
<Image borderRadius={"20px"} src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dw1c2fbe2a/images/Facebook.png" alt="abc"/>
          </Link>
      

        </Box>
      </Box>
      </Flex>
      </Box>


    </Flex>


     
    </>
    
  );
};

export default Signup;
