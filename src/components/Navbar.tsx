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

interface Props {
  onSearch: (searchText: string) => void;
}

function Navbar({ onSearch }: Props) {
  return (
    <HStack padding={5}>
      <Image src={navbar_logo} boxSize="37" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
