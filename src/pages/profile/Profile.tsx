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
import { ThreadCard, ReplyModal, ShareModal } from '@/components';
import { useLazyGetThreadsQuery } from '@/redux/services/threadServices';
import { useParams } from 'react-router-dom';
import { useInfiniteScroll } from '@/hooks';

import { type ThreadProps } from '@/types';

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { userId } = useParams();

  const [getThreads, { data, isFetching, isError }] = useLazyGetThreadsQuery();
  const { lastElementRef, page } = useInfiniteScroll(data?.totalPages ?? 0);

  const [threads, setThreads] = React.useState<ThreadProps[]>([]);

  const combineThreads = async () => {
    const result = await getThreads({
      id: userId ?? '',
      query: `page=${page}&limit=10`,
    });
    if (!result?.data?.threads?.length) return;
    setThreads((prev) => [...prev, ...result?.data?.threads]);
  };

  React.useEffect(() => {
    combineThreads();
  }, [userId, page]);

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
          {threads?.map((data, k: number) => (
            <>
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
            </>
          ))}
        </Grid>
      </Stack>

      <ReplyModal isOpen={isOpen} onClose={onClose} />

      <ShareModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Profile;
