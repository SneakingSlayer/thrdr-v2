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
   ButtonGroup,
   IconButton,
} from '@chakra-ui/react';

import {
   RiInstagramLine,
   RiFacebookBoxLine,
   RiTwitterLine,
} from 'react-icons/ri';

interface ReplyModalProps {
   isOpen: boolean;
   onClose: () => void;
   userValues: any;
   replyValues: any;
}

const ShareModal = (props: any) => {
   const { isOpen, onClose } = props;
   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent maxW={'300px'} mx={'.5rem'}>
            <ModalHeader px={'1.3rem'}>
               <Text fontSize={'md'}>Share this thread</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody px={'1.3rem'}>
               <Text>Share this via</Text>
               <ButtonGroup>
                  <IconButton
                     fontSize={'2xl'}
                     aria-label={'facebook-icon'}
                     icon={<RiFacebookBoxLine />}
                  />
                  <IconButton
                     aria-label={'instagram-icon'}
                     fontSize={'2xl'}
                     icon={<RiInstagramLine />}
                  />
                  <IconButton
                     fontSize={'2xl'}
                     aria-label={'twitter-icon'}
                     icon={<RiTwitterLine />}
                  />
               </ButtonGroup>
               <Text>Or copy this link</Text>
            </ModalBody>

            <ModalFooter px={'1.3rem'}></ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default ShareModal;
