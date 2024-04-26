import Emoji from "react-emoji-render";

interface Props {
  rating: number;
}

function EmojiScore({ rating }: Props) {
  if (rating < 3) {
    return null;
  }

  const emojiMap: { [key: number]: string } = {
    3: "neutral face",
    4: "star-truck",
    5: "rocket",
  };

  return <Emoji text={emojiMap[rating]} />;
}

export default EmojiScore;
