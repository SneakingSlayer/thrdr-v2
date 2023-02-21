import React from 'react';
import { Appbar } from '@/components';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { LayoutProps } from './types';
const InnerLayout = () => {
   return (
      <InnerWrapper>
         <Outlet />
      </InnerWrapper>
   );
};

const InnerWrapper = ({ children }: LayoutProps) => {
   return (
      <>
         <Appbar />
         <Container h={'auto'} pt={'6rem'} pb={'1rem'}>
            {children}
         </Container>
      </>
   );
};

export default InnerLayout;
