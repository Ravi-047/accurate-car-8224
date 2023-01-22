import React from "react";
// import { Link } from 'react-router-dom'
import {
  Flex,
  useToast,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Box,
  FormHelperText,
  FormErrorMessage,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };

    // console.log(payload);

    fetch("https://harlequin-deer-kilt.cyclic.app/login/loginUser", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));

    if (localStorage.getItem("token")) {
      localStorage.setItem("email", payload.email);
      setTimeout(() => {
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              {`welcome ${email} `}
            </Box>
          ),
        });
      }, 1000);
      navigateTo("/");
    } else {
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            {`please register first`}
          </Box>
        ),
      });
    }
  };

  const navigateTo = useNavigate();
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  return (
    <>
      <Box>
        <Flex>
          <Box marginLeft={"15%"}>
            <Text fontWeight={700} mt={"20px"} fontSize={"30px"}>
              Returning Customers
            </Text>
            <Text mt={"20px"} fontSize={"20px"}>
              If you are a registered user,
              <br /> please enter your email and password.
            </Text>

            <FormControl mt={"20px"}>
              <FormLabel mt={"20px"} fontSize={"30px"}>
                {" "}
                E-mail *
              </FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                height="60px"
                width="400px"
                fontSize="20px"
                type="email"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormErrorMessage>Email is required.</FormErrorMessage>

              <FormLabel mt={"20px"} fontSize={"30px"}>
                Password *
              </FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                height="60px"
                width="400px"
                fontSize="20px"
                type="password"
              />

              <Flex>
                <Box>
                  <Checkbox mt={"20px"} defaultChecked>
                    {" "}
                    <Text>Remember Me</Text>{" "}
                  </Checkbox>
                </Box>
                <Box mt={"20px"} ml={"40%"}>
                  <Text>Forget Password ?</Text>
                </Box>
              </Flex>
              <Button
                onClick={handleSubmit}
                _hover={{ color: "black" }}
                mt={"20px"}
                height={"50px"}
                fontSize={"20px"}
                borderRadius={"10px"}
                width={"200px"}
                color="white"
                bgColor={"blue.700"}
              >
                {" "}
                Sign In
              </Button>

              <Text mt={"30px"} color={"gray"}>
                or log in from your account from
              </Text>
              <Box mt={"15px"} border={"1px solid black"} width="250px">
                {" "}
                <Flex>
                  <Image
                    ml={"20px"}
                    src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dw1c2fbe2a/images/Facebook.png"
                    alt="abc"
                  />
                  <Text fontSize={"17px"} ml={"5px"} mt={"10px"}>
                    LOGIN WITH FACEBOOK
                  </Text>
                </Flex>
              </Box>

              <Box mt={"20px"}>
                <Text color={"gray"} fontSize={"14px"}>
                  Please see our Privacy Policy. California residents, see our
                  California Privacy <br /> Notice and Do Not Sell My Personal
                  Information page.
                </Text>
              </Box>
            </FormControl>
          </Box>
          <hr
            style={{
              border: "none",
              borderLeft: "1px solid hsla(200, 10%, 50%,100)",
              height: "100vh",
              width: "1px",
              marginLeft: "10%",
              marginTop: "30px",
            }}
          />

          <Box ml={"10%"}>
            <Text fontWeight={700} mt={"20px"} fontSize={"30px"}>
              New Customers
            </Text>
            <Text mt={"20px"} fontSize={"20px"}>
              Creating an account is easy. Just fill out the form <br /> below
              and enjoy the benefits of being a registered <br /> customer.
            </Text>
            <br />
            <Button
              onClick={() => GoTo("/signup")}
              _hover={{ color: "black" }}
              mt={"20px"}
              height={"50px"}
              fontSize={"20px"}
              borderRadius={"10px"}
              width={"200px"}
              color="white"
              bgColor={"blue.700"}
            >
              {" "}
              CREATE ACCOUNT NOW
            </Button>
            <Text fontWeight={700} mt={"20px"} fontSize={"30px"}>
              Track Your Order
            </Text>
            <Text mt={"20px"} fontSize={"20px"}>
              See your order even if you are not a registered user.
            </Text>

            <FormControl mt={"20px"}>
              <FormLabel mt={"20px"} fontSize={"30px"}>
                ORDER NUMBER *
              </FormLabel>
              <Input
                isRequired
                height="60px"
                width="400px"
                fontSize="20px"
                type="text"
                placeholder="ORDER NUMBER"
              />

              <FormLabel mt={"20px"} fontSize={"30px"}>
                Order Email*
              </FormLabel>
              <Input
                height="60px"
                width="400px"
                fontSize="20px"
                type="text"
                placeholder="Order Email"
              />

              <FormLabel mt={"20px"} fontSize={"30px"}>
                BILLING ZIP CODE *
              </FormLabel>
              <Input
                height="60px"
                width="400px"
                fontSize="20px"
                type="text"
                placeholder="BILLING ZIP CODE *"
              />
              <br />

              <Button
                color="black"
                _hover={{ color: "black" }}
                mt={"20px"}
                height={"50px"}
                fontSize={"20px"}
                width={"200px"}
              >
                CHECK STATUS
              </Button>
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Login;
