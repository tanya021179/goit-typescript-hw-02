import s from "./ImageGallery.module.css";
import ImageCard, { ImageItem } from "../ImageCard/ImageCard";

interface ImageGalleryProps {
  articles: ImageItem[];
  onOpenModal: (urls: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  articles,
  onOpenModal,
}) => {
  if (!Array.isArray(articles) || articles.length === 0) {
    return <p>No images.</p>;
  }

  return (
    <div className={s.containerGallery}>
      <ul className={s.list}>
        {articles.map((item) => (
          <li
            className={s.item}
            key={item.id}
            onClick={() => onOpenModal(item.urls.regular)}
          >
            <ImageCard
              item={item}
              onClick={() => onOpenModal(item.urls.regular)}
            />
            <div className={s.text}>
              <p>{item.alt_description}</p>
              <p>Likes: {item.likes}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
