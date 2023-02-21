import React from 'react';

import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Text,
   Button,
   Textarea,
   HStack,
   Switch,
   Avatar,
   Box,
   VStack,
   Flex,
} from '@chakra-ui/react';

interface ReplyModalProps {
   isOpen: boolean;
   onClose: () => void;
   userValues: any;
   replyValues: any;
}

const customOverlay = {
   background: 'rgba(0, 0, 0, 0.5)',
   boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
   backdropFilter: ' blur(5px)',
};

const customBody = {
   background: 'rgba(45,55,72, 0.7)',
   borderRadius: '16px',
   boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
   backdropFilter: ' blur(5px)',
};

const ReplyModal = (props: any) => {
   const { isOpen, onClose } = props;
   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent maxW={'500px'} mx={'.5rem'}>
            <ModalHeader px={'1.3rem'}>
               <Text fontSize={'md'}>Replying to sneakingslayer</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody px={'1.3rem'}>
               <VStack alignItems={'stretch'} spacing={5}>
                  <HStack alignItems={'start'} spacing={4}>
                     <Avatar name="Sneaking Slayer" src="htsda" />
                     <Box>
                        <HStack>
                           <Text
                              fontSize={'sm'}
                              fontWeight={'bold'}
                              color={'#A0AEC0'}
                           >
                              sneakingslayer
                           </Text>
                           <Text fontSize={'xs'} color={'#718096'}>
                              yesterday
                           </Text>
                        </HStack>
                        <Text fontSize={'lg'} fontWeight={700}>
                           test testtestv test testtestv test testtestv
                        </Text>
                     </Box>
                  </HStack>
                  <HStack alignItems={'start'} spacing={4}>
                     <Avatar name="Be Co" src="htsda" />

                     <Textarea
                        fontSize={'sm'}
                        placeholder={'Say something to sneakingslayer...'}
                     />
                  </HStack>
               </VStack>
            </ModalBody>

            <ModalFooter px={'1.3rem'}>
               <HStack spacing={3}>
                  <HStack>
                     <Text fontSize={'xs'} color={'#A0AEC0'}>
                        Anonymous?
                     </Text>
                     <Switch />
                  </HStack>
                  <Button
                     colorScheme="blue"
                     mr={3}
                     onClick={onClose}
                     size={'sm'}
                     px={5}
                  >
                     Post
                  </Button>
               </HStack>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default ReplyModal;
