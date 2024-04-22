import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {}

function SearchInput() {
  // Implement your component logic here

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
}

export default SearchInput;
