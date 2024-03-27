import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import navbar_logo from "../assets/navbar_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack padding="5px" justifyContent="space-between">
      <Image src={navbar_logo} boxSize="37" />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
