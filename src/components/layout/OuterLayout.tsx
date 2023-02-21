import React from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { LayoutProps } from './types';
const OuterLayout = () => {
   return (
      <OuterWrapper>
         <Outlet />
      </OuterWrapper>
   );
};

const OuterWrapper = ({ children }: LayoutProps) => {
   return (
      <Container h={'auto'} pt={'6rem'} pb={'1rem'}>
         {children}
      </Container>
   );
};

export default OuterLayout;
