export interface ImageItem {
  id: string;
  alt_description: string;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageCardProps {
  item: ImageItem;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div>
      <img src={item.urls.small} alt={item.alt_description} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
