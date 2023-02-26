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
import { type ThreadProps } from '@/types';
import { useForm } from 'react-hook-form';
import { useCreateReplyMutation } from '@/redux/services/replyServices';

interface ReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  thread: ThreadProps;
}

const ReplyModal = (props: ReplyModalProps) => {
  const { isOpen, onClose, thread } = props;

  const [createReplyMutation] = useCreateReplyMutation();

  const initPayload = {
    threadId: thread._id,
    createdBy: null,
    createdFor: thread.createdBy,
    message: '',
    isAnonymous: true,
    isLocked: false,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const payload = {
        ...initPayload,
        message: data.message,
        isAnonymous: data.isAnonymous,
      };
      console.log(payload);

      const result = await createReplyMutation({ payload });
      // dispatch(addThread((result as ResultProps)?.data?.message));
      console.log(result);
      reset();
    } catch (error) {}
  };
  console.log(errors);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={'500px'} mx={'.5rem'}>
        <ModalHeader px={'1.3rem'}>
          <Text fontSize={'md'}>Replying to {thread?.createdBy?.userName}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody px={'1.3rem'}>
            <VStack alignItems={'stretch'} spacing={5}>
              <HStack alignItems={'start'} spacing={4}>
                <Avatar name="Sneaking Slayer" src="htsda" />
                <Box>
                  <HStack>
                    <Text fontSize={'sm'} fontWeight={'bold'} color={'#A0AEC0'}>
                      {thread?.createdBy?.userName}
                    </Text>
                    <Text fontSize={'xs'} color={'#718096'}>
                      {thread?.createdAt}
                    </Text>
                  </HStack>
                  <Text fontSize={'lg'} fontWeight={700}>
                    {thread?.description}
                  </Text>
                </Box>
              </HStack>
              <HStack alignItems={'start'} spacing={4}>
                <Avatar name="Be Co" src="htsda" />

                <Textarea
                  {...register('message', { required: true })}
                  fontSize={'sm'}
                  placeholder={`Say something to ${thread?.createdBy?.userName}...`}
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
                <Switch {...register('isAnonymous')} />
              </HStack>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={onClose}
                size={'sm'}
                px={5}
                type={'submit'}
              >
                Post
              </Button>
            </HStack>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ReplyModal;
