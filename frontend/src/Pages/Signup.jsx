import React from "react";
import { FormControl, FormLabel, Input, Box,FormHelperText,FormErrorMessage, Checkbox,Button } from "@chakra-ui/react";

import { Show, Hide } from '@chakra-ui/react'

const Signup = () => {
  return (
    <>
      <Box ml={"35%"}>
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
          <select  style={{height:"60px",width:"400px",fontSize:"20px"}} placeholder="Gender">
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
      <Button height={"50px"}  borderRadius={"20px"} width={"200px"} bgColor={"blue.600"}> Apply</Button>
      </Box>
    </>
    
  );
};

export default Signup;
