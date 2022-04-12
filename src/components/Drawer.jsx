import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text,
  Divider,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <VStack as='button' ref={btnRef} onClick={onOpen} spacing='auto'>
        <IoIosArrowUp />
        <Text>Open...</Text>
      </VStack>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <VStack>
            <DrawerHeader>Go to...</DrawerHeader>
            <Divider orientation='horizontal' />
            <DrawerBody>
              <VStack>
                <LinkBox>
                  <LinkOverlay href='https://brayanlope5.github.io/1_Fist_Website/'>
                    Atreyu
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay href='https://youtu.be/ZTrp0NM6T6g'>
                    Poe Video
                  </LinkOverlay>
                </LinkBox>
              </VStack>
            </DrawerBody>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
