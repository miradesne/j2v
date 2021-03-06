import Image from "next/image";
import storyCardStyles from "./story-card-list.module.scss";

export default function Img({ src }) {
  return (
    <Image
      layout="fill"
      src={src}
      className={storyCardStyles.img}
      priority={true}
    />
  );
}
