import { ReactNode } from 'react';
import {
   Box,
   Flex,
   Avatar,
   Button,
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   MenuDivider,
   useDisclosure,
   useColorModeValue,
   Stack,
   useColorMode,
   Center,
   Container,
   Heading,
   ButtonGroup,
   IconButton,
   Text,
   HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { RiNotification4Line, RiSunLine, RiMoonLine } from 'react-icons/ri';

const Appbar = () => {
   const { colorMode, toggleColorMode } = useColorMode();
   console.log(colorMode);
   return (
      <Flex as="header" position="fixed" w={'100%'} zIndex={9}>
         <Container>
            <Box
               bg={useColorModeValue('gray.100', 'gray.900')}
               px={4}
               w={'100%'}
            >
               <Flex
                  h={16}
                  alignItems={'center'}
                  justifyContent={'space-between'}
               >
                  <Box>
                     <Link to={'/asdsa'}>
                        <Heading fontSize={'2xl'}>thrdr.</Heading>
                     </Link>
                  </Box>
                  <ButtonGroup spacing={2}>
                     <Menu placement="bottom-end">
                        <MenuButton
                           as={IconButton}
                           aria-label="Options"
                           icon={<RiNotification4Line />}
                           size={'sm'}
                           fontSize={'md'}
                        />
                        <MenuList alignItems={'center'} maxW={'xs'} p={0}>
                           <MenuItem px={4} py={2}>
                              <HStack alignItems={'start'}>
                                 <Avatar size={'sm'} />
                                 <Box>
                                    <Text fontSize={'sm'}>
                                       sneaking slayer commented in "ngano aslom
                                       man kag ilok"
                                    </Text>
                                    <Text fontSize={'xs'}>1 hour ago</Text>
                                 </Box>
                              </HStack>
                           </MenuItem>
                           <MenuItem px={4} py={2}>
                              <HStack alignItems={'start'}>
                                 <Avatar size={'sm'} />
                                 <Box>
                                    <Text fontSize={'sm'}>
                                       sneaking slayer commented in "ngano aslom
                                       man kag ilok"
                                    </Text>
                                    <Text fontSize={'xs'}>1 hour ago</Text>
                                 </Box>
                              </HStack>
                           </MenuItem>
                           <MenuItem>
                              <Text fontSize={'sm'} colorScheme={'messenger'}>
                                 Show all notifications
                              </Text>
                           </MenuItem>
                        </MenuList>
                     </Menu>
                     <Menu placement="bottom-end">
                        <MenuButton as={Button} size={'sm'}>
                           <Avatar size={'sm'} name="Lance Endaya" />
                        </MenuButton>
                        <MenuList alignItems={'center'}>
                           <MenuItem>Profile</MenuItem>
                           <MenuItem>
                              Color Mode :
                              {colorMode === 'light' ? (
                                 <IconButton
                                    size={'sm'}
                                    aria-label="notifications"
                                    icon={<RiSunLine />}
                                    onClick={toggleColorMode}
                                    fontSize={'lg'}
                                 />
                              ) : (
                                 <IconButton
                                    size={'sm'}
                                    aria-label="notifications"
                                    icon={<RiMoonLine />}
                                    onClick={toggleColorMode}
                                    fontSize={'lg'}
                                 />
                              )}
                           </MenuItem>
                           <MenuItem>Settings</MenuItem>
                           <MenuItem>Logout</MenuItem>
                        </MenuList>
                     </Menu>
                  </ButtonGroup>
               </Flex>
            </Box>
         </Container>
      </Flex>
   );
};

{
   /** <Flex alignItems={'center'}>
                     <Stack direction={'row'} spacing={7}>
                        <Menu>
                           <MenuButton
                              as={Button}
                              rounded={'full'}
                              variant={'link'}
                              cursor={'pointer'}
                              minW={0}
                           >
                              <Avatar
                                 size={'sm'}
                                 src={
                                    'https://avatars.dicebear.com/api/male/username.svg'
                                 }
                              />
                           </MenuButton>
                           <MenuList alignItems={'center'}>
                              <br />
                              <Center>
                                 <Avatar
                                    size={'md'}
                                    src={
                                       'https://avatars.dicebear.com/api/male/username.svg'
                                    }
                                 />
                              </Center>
                              <br />
                              <Center>
                                 <p>Username</p>
                              </Center>
                              <br />
                              <MenuDivider />
                              <MenuItem>Your Servers</MenuItem>
                              <MenuItem>Account Settings</MenuItem>
                              <MenuItem>Logout</MenuItem>
                           </MenuList>
                        </Menu>
                     </Stack>
                  </Flex>*/
}

export default Appbar;
