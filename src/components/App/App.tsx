import {imageTypes} from '../../types.ts'
import SearchBar from "../SearchBar/SearchBar.tsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.tsx";
import { fetchImage } from "../../feach-api.ts";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import Loader from "../Loader/Loader.tsx";
import ImageModal from "../ImageModal/ImageModal.tsx";


export default function App() {
  const [images, setImages] = useState<imageTypes[]>([]);
  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [bigImage, setBIgImage] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages(){
      try {
        setLoader(true);
        const image = await fetchImage(topic, page);
        setImages((prevImage) => {
        return [...prevImage, ...image.results];
        });
        setTotalPage(image.total_pages);
      } catch (e: unknown) {
        console.log(e);
        setLoader(false);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [topic, page , totalPage])
  
  function handleSurch(newTopic: string): void {
    setTopic(newTopic);
    setImages([]);
    setPage(1);
  }
  function handleClickImg(url: string): void {
    setBIgImage(url);
    setIsOpen(true);
  }
  function handleClick(): void {
    setPage(page + 1);
  }
  
  
  return (
    <div>
      <SearchBar onSearch={handleSurch} />
      <ImageGallery images={images} onClickImage={handleClickImg} />
      {images.length > 0 && totalPage > 1 &&  !loader && <LoadMoreBtn onLoadMore={handleClick} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        imgUrl={bigImage}
      />
    </div>
  );
}