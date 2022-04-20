import React from 'react';
import { ChakraProvider, theme, Text, Center, VStack } from '@chakra-ui/react';
import DrawerMenu from './components/DrawerMenu';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center flexDirection='column' h='100vh' w='100vw'>
        <ColorModeSwitcher />
        <VStack bgGradient='linear(to-b, #7928CA, #FF0080)' bgClip='text'>
          <Text h='20vw' fontSize='20vw'>
            Riva
          </Text>
          <Text h='20vw' fontSize='10vw'>
            Villa
          </Text>
        </VStack>
        <DrawerMenu />
      </Center>
    </ChakraProvider>
  );
}

export default App;
