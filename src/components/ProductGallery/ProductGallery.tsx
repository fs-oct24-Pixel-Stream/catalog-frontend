import React from 'react';
import './ProductGallery.scss';
import ImageGallery from 'react-image-gallery';

type Props = {
  images: string[];
  name: string;
};

export const ProductGallery: React.FC<Props> = ({ images, name }) => {
  const pictures = images.map((img) => {
    return {
      original: img,
      thumbnail: img,
    };
  });

  return (
    <div className="image-gallery">
      <ImageGallery
        items={pictures}
        showThumbnails={true}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        onErrorImageURL={name}
      />
    </div>
  );
};
