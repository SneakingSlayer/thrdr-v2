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
import { RiMessage3Line, RiShareForwardLine, RiEyeLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { LinkOverlay, Appbar } from '@/components';
const MainReply = ({ mainReply }: any) => {
  return (
    <VStack alignItems={'stretch'} spacing={5} py={2}>
      <HStack alignItems={'start'} spacing={3}>
        <Avatar name="Sneaking Slayer" src="htsda" size={'sm'} />
        <VStack alignItems={'start'} spacing={3}>
          <Box>
            <HStack>
              <Text fontSize={'sm'} fontWeight={'bold'} color={'#A0AEC0'}>
                {mainReply.createdBy.userName}
              </Text>
              <Text fontSize={'xs'} color={'#718096'}>
                {mainReply.createdAt}
              </Text>
            </HStack>
            <Text>{mainReply.message}</Text>
          </Box>
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
            Reply
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MainReply;
