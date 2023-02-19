import React from 'react';
import {
   Container,
   Input,
   Button,
   FormControl,
   InputGroup,
   VStack,
   HStack,
   ButtonGroup,
} from '@chakra-ui/react';
import { Appbar } from '@/components';
const Settings = () => {
   return (
      <>
         <Appbar />
         <Container h={'auto'} pt={'6rem'} pb={'1rem'}>
            <form action="">
               <VStack alignItems={'start'}>
                  <HStack w={'100%'}>
                     <FormControl>
                        <InputGroup>
                           <Input placeholder="First name" />
                        </InputGroup>
                     </FormControl>
                     <FormControl>
                        <InputGroup>
                           <Input placeholder="Last name" />
                        </InputGroup>
                     </FormControl>
                  </HStack>
                  <FormControl>
                     <InputGroup>
                        <Input placeholder="Username" />
                     </InputGroup>
                  </FormControl>
                  <FormControl>
                     <InputGroup>
                        <Input placeholder="Birthday" type={'date'} />
                     </InputGroup>
                  </FormControl>
                  <FormControl>
                     <InputGroup>
                        <Input placeholder="Email" />
                     </InputGroup>
                  </FormControl>
                  <FormControl>
                     <InputGroup>
                        <Input placeholder="Password" />
                     </InputGroup>
                  </FormControl>
                  <ButtonGroup>
                     <Button variant={'ghost'}>Delete account</Button>
                     <Button>Save</Button>
                  </ButtonGroup>
               </VStack>
            </form>
         </Container>
      </>
   );
};

export default Settings;
