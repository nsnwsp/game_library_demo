import Emoji from "react-emoji-render";

interface Props {
  rating: number;
}

function EmojiScore({ rating }: Props) {
  if (rating < 3) {
    return null;
  }

  const emojiMap: { [key: number]: string } = {
    3: "😌️",
    4: "🤩️",
    5: "🤯️",
  };

  return (
    <span style={{ fontSize: "1.5em" }}>
      <Emoji text={emojiMap[rating]} />
    </span>
  );
}

export default EmojiScore;
