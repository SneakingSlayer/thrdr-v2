import React from 'react';
import { Appbar } from '@/components';
interface LayoutProps {
   children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
   return (
      <>
         <Appbar />
         {children}
      </>
   );
};

export default Layout;
