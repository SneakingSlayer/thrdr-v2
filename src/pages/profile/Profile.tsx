import React from 'react';

import { Appbar } from '@/components';

import {
   Stack,
   FormControl,
   InputGroup,
   Input,
   Button,
   Divider,
   Container,
   Text,
   Link,
   Checkbox,
   Flex,
   Box,
   Avatar,
   Textarea,
   Heading,
   Switch,
   Grid,
   GridItem,
   VStack,
   Menu,
   MenuItem,
   MenuButton,
   MenuList,
   HStack,
} from '@chakra-ui/react';

import { CgChevronDown } from 'react-icons/cg';

import { ThreadCard, ReplyModal, ShareModal } from '@/components';

import { useDisclosure } from '@chakra-ui/react';

const Profile = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   return (
      <>
         <Stack spacing={8}>
            <VStack mb={'1rem'}>
               <Avatar name="Lance Endaya" src="htsda" />
               <Text fontWeight={700} lineHeight={'1'}>
                  thelancethe
               </Text>
               <Text fontSize={'xs'} lineHeight={'1'}>
                  test testtestv test testtestv test testtestv
               </Text>
            </VStack>
            <form action="">
               <Stack>
                  <Textarea placeholder="Say something..." rows={4} />
                  <Flex justifyContent={'space-between'} alignItems={'center'}>
                     <HStack>
                        <Text fontSize={'sm'} color={'#A0AEC0'}>
                           Anonymous?
                        </Text>
                        <Switch />
                     </HStack>
                     <Button colorScheme={'messenger'} size={'sm'} px={5}>
                        Post
                     </Button>
                  </Flex>
               </Stack>
            </form>
            <Flex justifyContent={'space-between'}>
               <Heading size={'md'}>Threads</Heading>
               <Menu>
                  <MenuButton
                     direction="ltr"
                     size={'xs'}
                     as={Button}
                     variant="outline"
                     rightIcon={<CgChevronDown />}
                     colorScheme={'messenger'}
                  >
                     Hot
                  </MenuButton>
                  <MenuList>
                     <MenuItem>Hot</MenuItem>
                     <MenuItem>Fresh</MenuItem>
                     <MenuItem>Trending</MenuItem>
                  </MenuList>
               </Menu>
            </Flex>
            <Grid gap={3}>
               {[1, 2, 3].map((i, k) => (
                  <GridItem key={k} colSpan={12}>
                     <ThreadCard onOpenReply={onOpen} onOpenShare={onOpen} />
                  </GridItem>
               ))}
            </Grid>
         </Stack>

         {/**<ReplyModal isOpen={isOpen} onClose={onClose} /> */}
         <ShareModal isOpen={isOpen} onClose={onClose} />
      </>
   );
};

export default Profile;
