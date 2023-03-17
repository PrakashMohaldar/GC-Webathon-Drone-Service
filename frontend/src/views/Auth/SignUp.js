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
  
// import BgSignUp from "../../assets/img/BgSignUp.png";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signup, signupGoogle } from '../../redux/actions/auth';
import { useHistory } from "react-router-dom";

const InitState = {
  name: '',
  email: '',
  password: '',
};

function SignUp() {
  const nagivate = useHistory();
  const dispatch = useDispatch();
  const [sForm, setsForm] = useState(InitState);
  const [error, setError] = useState('');

  const handleChange = event => {

    setsForm({
      ...sForm,
      [event.target.name]: event.target.value,
    });
  }

  const handleGoogleLoginSuccess = tokenResponse => {
    const accessToken = tokenResponse.access_token;
    dispatch(signupGoogle(accessToken, nagivate));
  };
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  const handleSubmit = event => {
    event.preventDefault();
    try {
      dispatch(signup(sForm, nagivate, setError));
    } catch (err) {
      console.log(err);
    }
    if(error === '') setsForm(InitState)
  };

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
          <form onSubmit={handleSubmit}>
          <FormControl >
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Name
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              name='name'
              placeholder='Your full name'
              mb='24px'
              size='lg'
              onChange={handleChange}
              />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Email
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='email'
              name='email'
              placeholder='Your email address'
              mb='24px'
              size='lg'
              onChange={handleChange}
              />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Password
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              name='password'
              type='password'
              placeholder='Your password'
              mb='24px'
              size='lg'
              onChange={handleChange}
              />
            <Text
            fontSize='14px'
            color={'red'}
            fontWeight='bold'
            mb='22px'>
            {error}
          </Text>
            <Button
              type='submit'
              bg='teal.300'
              fontSize='14px'
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
          </form>
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
