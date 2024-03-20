import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Game, Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <HStack>
        {platforms.map((platform) => (
          <Icon margin="1" as={iconMap[platform.slug]} />
        ))}
      </HStack>
    </>
  );
}

export default PlatformIconList;
