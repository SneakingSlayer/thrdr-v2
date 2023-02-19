import React from 'react';
import { MainReply, SubReply } from '@/components';
import { Text, Box } from '@chakra-ui/react';
const Reply = () => {
   return (
      <Box>
         <MainReply />
         <SubReply />

         <Text fontWeight={700} ml={'50px'} fontSize={'sm'} color={'Highlight'}>
            Show 10 more replies
         </Text>
      </Box>
   );
};

export default Reply;
