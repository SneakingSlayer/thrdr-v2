import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const LinkOverlay = styled(Link)`
   &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
   }
`;

export default LinkOverlay;
