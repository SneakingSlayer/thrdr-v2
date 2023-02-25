import React from 'react';

import {
  Stack,
  Textarea,
  Flex,
  HStack,
  Text,
  Button,
  Switch,
} from '@chakra-ui/react';

import { useCreateThreadMutation } from '@/redux/services/threadServices';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@/redux/hooks';
import { addThread } from '@/redux/slices/threadSlice';

import { type ThreadProps } from '@/types';

interface ResultProps {
  data: { message: ThreadProps };
}

const ThreadForm = () => {
  const initPayload = {
    description: '',
    createdBy: null,
    createdFor: 'theoriginator',
    status: 'fresh',
    isAnonymous: true,
    isLocked: false,
  };

  const dispatch = useAppDispatch();

  const [createThread] = useCreateThreadMutation();

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
        description: data.description,
        isAnonymous: data.isAnonymous,
      };
      const result = await createThread({ payload });
      dispatch(addThread((result as ResultProps)?.data?.message));
      reset();
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Textarea
          {...register('description', { required: true })}
          placeholder="Say something..."
          rows={4}
        />
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <HStack>
            <Text fontSize={'sm'} color={'#A0AEC0'}>
              Anonymous?
            </Text>
            <Switch {...register('isAnonymous')} />
          </HStack>
          <Button colorScheme={'messenger'} size={'sm'} px={5} type={'submit'}>
            Post
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default ThreadForm;
