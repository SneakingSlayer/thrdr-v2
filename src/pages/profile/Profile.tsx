import React from 'react';

import {
  Stack,
  Button,
  Text,
  Flex,
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
  useDisclosure,
} from '@chakra-ui/react';
import { CgChevronDown } from 'react-icons/cg';
import { ThreadCard, ReplyModal, ShareModal, ThreadForm } from '@/components';
import { useLazyGetThreadsQuery } from '@/redux/services/threadServices';
import { useParams } from 'react-router-dom';
import { useInfiniteScroll } from '@/hooks';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loadThreads } from '@/redux/slices/threadSlice';

import { type ThreadProps } from '@/types';

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { userId } = useParams();

  const dispatch = useAppDispatch();

  const [getThreads, { data, isFetching, isError }] = useLazyGetThreadsQuery();
  const { lastElementRef, page } = useInfiniteScroll(data?.totalPages ?? 0);
  const { threads } = useAppSelector((state) => state.threads);

  React.useEffect(() => {
    getThreads({
      id: userId ?? '',
      query: `page=${page}&limit=10`,
    });
  }, [userId, page]);

  React.useEffect(() => {
    if (data?.threads?.length > 0) {
      dispatch(loadThreads(data?.threads));
    }
  }, [data?.threads, isFetching]);

  return (
    <>
      <Stack spacing={8}>
        <VStack mb={'1rem'}>
          <Avatar name="Lance Endaya" src="htsda" />
          <Text fontWeight={700} lineHeight={'1'}>
            {userId}
          </Text>
          <Text fontSize={'xs'} lineHeight={'1'}>
            test testtestv test testtestv test testtestv
          </Text>
        </VStack>
        <ThreadForm />
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
          {threads?.map((data: ThreadProps, k: number) => (
            <React.Fragment key={k}>
              {
                // eslint-disable-next-line multiline-ternary
                k === threads?.length - 1 ? (
                  <GridItem key={k} colSpan={12} ref={lastElementRef}>
                    <ThreadCard
                      thread={data}
                      onOpenReply={onOpen}
                      onOpenShare={onOpen}
                    />
                  </GridItem>
                ) : (
                  <GridItem key={k} colSpan={12}>
                    <ThreadCard
                      thread={data}
                      onOpenReply={onOpen}
                      onOpenShare={onOpen}
                    />
                  </GridItem>
                )
              }
            </React.Fragment>
          ))}
        </Grid>
      </Stack>

      <ReplyModal isOpen={isOpen} onClose={onClose} />

      <ShareModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Profile;
