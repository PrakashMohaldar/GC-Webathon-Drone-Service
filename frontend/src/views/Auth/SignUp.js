import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  
//   import BgSignUp from "../../assets/img/BgSignUp.png";
  import React from "react";
  import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
  
  function SignUp() {
    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
    return (
      <Flex
        direction='column'
        alignSelf='center'
        justifySelf='center'
        overflow='hidden'>
        <Box
          position='absolute'
          minH={{ base: "70vh", md: "50vh" }}
          w={{ md: "calc(100vw - 50px)" }}
          borderRadius={{ md: "15px" }}
          left='0'
          right='0'
          bgRepeat='no-repeat'
          overflow='hidden'
          zIndex='-1'
          top='0'
          bgSize='cover'
          mx={{ md: "auto" }}
          mt={{ md: "14px" }}></Box>
        <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
          <Flex
            direction='column'
            w='445px'
            background='transparent'
            borderRadius='15px'
            p='40px'
            mx={{ base: "20px"}}
            my={{ base: "100px"}}
            bg={bgColor}
            boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
            <Text
              fontSize='xl'
              color={textColor}
              fontWeight='bold'
              textAlign='center'
              mb='22px'>
              Register With
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Name
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='text'
                placeholder='Your full name'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='email'
                placeholder='Your email address'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                fontSize='sm'
                ms='4px'
                borderRadius='15px'
                type='password'
                placeholder='Your password'
                mb='24px'
                size='lg'
              />
              <Button
                type='submit'
                bg='teal.300'
                fontSize='10px'
                color='white'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px'
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}>
                SIGN UP
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Already have an account?
                <Link
                  color={titleColor}
                  to='/auth/signin'
                  as='span'
                  ms='5px'
                  href='#'
                  fontWeight='bold'>
                  Sign In
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
  
  export default SignUp;
  