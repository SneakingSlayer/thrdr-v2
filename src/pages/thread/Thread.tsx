import React from 'react';
import {
   Card,
   CardBody,
   Text,
   Avatar,
   Stack,
   Box,
   Tag,
   TagLabel,
   TagLeftIcon,
   HStack,
   IconButton,
   Button,
   AvatarGroup,
   Flex,
   LinkBox,
   Container,
   Textarea,
   Switch,
   Divider,
   VStack,
   Grid,
   GridItem,
} from '@chakra-ui/react';
import { HiFire } from 'react-icons/hi';
import { RiMessage3Line, RiShareForwardLine, RiEyeLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { LinkOverlay, Appbar, Reply } from '@/components';

const Thread = () => {
   return (
      <>
         <Appbar />
         <Container h={'auto'} pt={'6rem'} pb={'1rem'}>
            <Stack spacing={4}>
               <HStack justifyContent={'space-between'} alignItems={'baseline'}>
                  <Stack direction={'row'} alignItems={'center'}>
                     <Avatar name="Sneaking Slayer" src="htsda" size={'sm'} />
                     <Box>
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
                     </Box>
                  </Stack>
                  <Tag colorScheme={'orange'} size={'sm'}>
                     <HStack spacing={1}>
                        <HiFire />
                        <TagLabel>Hot</TagLabel>
                     </HStack>
                  </Tag>
               </HStack>
               <Text fontSize={'xl'} fontWeight={700}>
                  Ngano baho kaayo kag ilok? Pag tuon sad ug deodorant.
               </Text>
               <Flex justifyContent={'space-between'}>
                  <HStack spacing={3}>
                     <Button
                        p={0}
                        variant="ghost"
                        leftIcon={<RiMessage3Line fontSize={'xs'} />}
                        size={'sm'}
                        colorScheme={'messenger'}
                        h={'auto'}
                        border={'none'}
                        _focus={{ boxShadow: 'none', outline: 'none' }}
                        _hover={{ background: 'none' }}
                     >
                        10 Replies
                     </Button>
                     <Button
                        p={0}
                        variant="ghost"
                        leftIcon={<RiShareForwardLine fontSize={'xs'} />}
                        size={'sm'}
                        colorScheme={'messenger'}
                        h={'auto'}
                        border={'none'}
                        _focus={{ boxShadow: 'none', outline: 'none' }}
                        _hover={{ background: 'none' }}
                     >
                        5 Shares
                     </Button>
                  </HStack>
                  <HStack spacing={1}>
                     <RiEyeLine fontSize={'xs'} color={'messenger'} />
                     <Text color={'#A0AEC0'} fontSize={'xs'} fontWeight={700}>
                        1,923 hits
                     </Text>
                  </HStack>
               </Flex>
            </Stack>
            <Box py={5}>
               <Divider />
            </Box>
            <Grid gap={5}>
               {[1, 2, 3].map((e, i) => (
                  <GridItem key={i}>
                     <Reply />
                  </GridItem>
               ))}
            </Grid>
         </Container>
      </>
   );
};

export default Thread;
