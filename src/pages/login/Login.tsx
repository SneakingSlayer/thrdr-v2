import React from 'react';

import {
   Stack,
   FormControl,
   InputGroup,
   Input,
   Button,
   Divider,
   Container,
   Text,
   Checkbox,
   Flex,
   Box,
   useColorMode,
   Card,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Login = () => {
   return (
      <Container
         minHeight={'100vh'}
         h={'auto'}
         w={'100%'}
         display={'flex'}
         justifyContent={'center'}
         alignItems={'center'}
      >
         <Box w={'100%'}>
            <Box mb={6}>
               <Text
                  fontSize={'6xl'}
                  fontWeight={700}
                  align={'center'}
                  color="primary.400"
               >
                  thrdr.
               </Text>
               <Text align={'center'} fontSize={'sm'} color="GrayText">
                  You go talk to her/him na kasi, wag na dito.
               </Text>
            </Box>
            <form action="">
               <Stack>
                  <FormControl>
                     <InputGroup>
                        <Input placeholder="Email for username" type="text" />
                     </InputGroup>
                  </FormControl>
                  <FormControl>
                     <InputGroup>
                        <Input placeholder="Password" type="password" />
                     </InputGroup>
                  </FormControl>
                  <Flex justifyContent={'space-between'}>
                     <Checkbox size={'sm'} color="GrayText">
                        Remember me?
                     </Checkbox>
                     <Link to="/asd">
                        <Text fontSize={'sm'}>Forgot password?</Text>
                     </Link>
                  </Flex>
                  <Stack spacing={3} py={5}>
                     <Button width={'full'}>Sign In</Button>

                     <Text fontSize="sm" align={'center'} color="GrayText">
                        Don't have an account yet?{' '}
                        <Link to="/signup">Sign up here</Link>
                     </Text>
                  </Stack>
               </Stack>
            </form>
            <Box p={'1rem'}>
               <Text
                  fontWeight={700}
                  fontSize={'xl'}
                  align={'center'}
                  color="GrayText"
               >
                  thrdr.
               </Text>
               <Text fontSize={'xs'} align={'center'} color="GrayText">
                  Copyright © 2023 Marama Networks
               </Text>
            </Box>
         </Box>
      </Container>
   );
};

export default Login;
