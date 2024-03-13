import { HStack, Image, Text } from "@chakra-ui/react";
import navbar_logo from "../assets/navbar_logo.png";

function Navbar() {
  return (
    <HStack>
      <Image src={navbar_logo} boxSize="37" />
      <Text>Navigation bar</Text>
    </HStack>
  );
}

export default Navbar;
