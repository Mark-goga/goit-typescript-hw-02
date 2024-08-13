import { imageTypes } from '../../types';
import css from './ImageCard.module.css';
import { FC } from 'react'

type ImageCardProps = {
  image: imageTypes;
  onClickImage: (url: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image: { alt_description, urls }, onClickImage }) => {
  function handleClick() {
    onClickImage(urls.full);
  }
  return (
    <div className={css.box}>
      <img
        className={css.image}
        src={urls.small}
        alt={alt_description}
        onClick={handleClick}
      />
    </div>
  );
}
export default ImageCard;