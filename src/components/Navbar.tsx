import {
  Button,
  HStack,
  Image,
  InputGroup,
  InputLeftElement,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import navbar_logo from "../assets/navbar_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <HStack padding={5}>
      <Image src={navbar_logo} boxSize="37" />
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
