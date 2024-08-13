import {FC} from 'react'
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
import { imageTypes } from '../../types'

type ImageGalleryProps = {
  images: imageTypes[];
  onClickImage: (url: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClickImage }) => {
  return (
    <ul className={css.list}>
      {images.map((image , index) => (
        <li className={css.item} key={`${image.id}-${index}`}>
          <ImageCard image={image} onClickImage={onClickImage} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;