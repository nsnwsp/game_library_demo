import { Select } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
  const { data, error, isLoading } = usePlatforms();

  console.log(data);

  return (
    <Select placeholder="Select a Platform" width="200px">
      {data.map((platform) => (
        <option value={platform.slug}>{platform.name}</option>
      ))}
    </Select>
  );
}

export default PlatformSelector;
