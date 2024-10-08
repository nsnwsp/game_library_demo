import noImage from "../assets/no-image-placeholder.svg";
const getCroppedImageUrl = (url: string): string => {
  if (!url) return noImage;
  return url.replace("/media/", "/media/crop/600/400/");
};

export default getCroppedImageUrl;
