import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme/theme';
import { ColorModeScript } from '@chakra-ui/react';

import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode="dark" />
            <App />
         </ChakraProvider>
      </Provider>
   </React.StrictMode>
);
