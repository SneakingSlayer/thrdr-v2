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
} from '@chakra-ui/react';
import { HiFire } from 'react-icons/hi';
import { RiMessage3Line, RiShareForwardLine, RiEyeLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { LinkOverlay } from '@/components';
const ThreadCard = (props: any) => {
   const { onOpenReply, onOpenShare } = props;
   return (
      <Card>
         <CardBody>
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
               <LinkOverlay to={'/asd/asd'}>
                  <Text>test testtestv test testtestv test testtestv</Text>
               </LinkOverlay>
               <Flex justifyContent={'space-between'}>
                  <HStack spacing={3}>
                     <Button
                        onClick={onOpenReply}
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
                        Reply
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
                        onClick={onOpenReply}
                     >
                        Share
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
         </CardBody>
      </Card>
   );
};

export default ThreadCard;
