import React from 'react';
import { ChakraProvider, theme, Text, Center } from '@chakra-ui/react';
import DrawerMenu from './components/Drawer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center
        flexDirection='column'
        h='95vh'
        bgGradient='linear(to-b, #7928CA, #FF0080)'
        bgClip='text'
      >
        <Text h='20vw' fontSize='20vw'>
          Riva
        </Text>
        <Text h='20vw' fontSize='10vw'>
          Villa
        </Text>
        <DrawerMenu />
      </Center>
    </ChakraProvider>
  );
}

export default App;
