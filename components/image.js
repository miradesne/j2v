import Image from "next/image";

export default function Img({ src }) {
  return <Image layout="fill" src={src} className={storyCardStyles.img} />;
}
