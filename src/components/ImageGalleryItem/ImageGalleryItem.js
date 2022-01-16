import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imagesArray, onClick }) => {
  return imagesArray.map(({ id, webformatURL, largeImageURL }) => (
    <li
      key={id}
      className={s.ImageGalleryItem}
      onClick={() => onClick(largeImageURL)}
    >
      <img className={s.image} src={webformatURL} alt="" />
    </li>
  ));
};

export default ImageGalleryItem;
