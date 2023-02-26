import React from 'react';
import {
  Text,
  Avatar,
  Stack,
  Box,
  Tag,
  TagLabel,
  HStack,
  Button,
  Flex,
  Divider,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { HiFire } from 'react-icons/hi';
import { RiMessage3Line, RiShareForwardLine, RiEyeLine } from 'react-icons/ri';
import { Reply, ThreadForm } from '@/components';
import { useLazyGetThreadQuery } from '@/redux/services/threadServices';
import { useLazyGetRepliesQuery } from '@/redux/services/replyServices';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { loadReplies } from '@/redux/slices/replySlice';
import { useInfiniteScroll } from '@/hooks';
const Thread = () => {
  const { threadId, userId } = useParams();
  const [getThread, { data: thread }] = useLazyGetThreadQuery();
  const [getReplies, { data: replies, isFetching: isFetchingReplies }] =
    useLazyGetRepliesQuery();

  const { lastElementRef, page } = useInfiniteScroll(replies?.totalPages ?? 0);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    getThread({ id: threadId ?? '' });
  }, [threadId]);

  React.useEffect(() => {
    getReplies({ id: threadId ?? '', query: `page=${page}&limit=5` });
  }, [threadId, page]);

  React.useEffect(() => {
    dispatch(loadReplies(replies?.replies));
  }, [replies?.replies, isFetchingReplies]);

  const { replies: loadedReplies } = useAppSelector((state) => state.replies);
  console.log(loadedReplies);
  return (
    <>
      <Stack spacing={4}>
        <HStack justifyContent={'space-between'} alignItems={'baseline'}>
          <Stack direction={'row'} alignItems={'center'}>
            <Avatar name="Sneaking Slayer" src="htsda" size={'sm'} />
            <Box>
              <Text fontSize={'sm'} fontWeight={'bold'} color={'#A0AEC0'}>
                {thread?.createdBy?.userName}
              </Text>
              <Text fontSize={'xs'} color={'#718096'}>
                {thread?.createdAt}
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
          {thread?.description}
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
        {loadedReplies?.map((data, i) => (
          <React.Fragment key={i}>
            {
              // eslint-disable-next-line multiline-ternary
              i === loadedReplies?.length - 1 ? (
                <GridItem ref={lastElementRef}>
                  <Reply reply={data} />
                </GridItem>
              ) : (
                <GridItem>
                  <Reply reply={data} />
                </GridItem>
              )
            }
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default Thread;
