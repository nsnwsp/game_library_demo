import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import navbar_logo from "../assets/navbar_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack>
      <Image src={navbar_logo} boxSize="37" />
      <Text>Navigation bar!</Text>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
