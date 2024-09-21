import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSpinner from './LoadingSpinner';
import './ImageGrid.css'; // Specific styles for the grid

const ImageGrid = () => {
  const [images, setImages] = useState([...Array(8).keys()]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      setImages((prevImages) => prevImages.concat([...Array(8).keys()]));
      if (images.length >= 50) {
        setHasMore(false);
      }
    }, 1500);
  };

  return (
    <div>
      <h1>Load more image</h1>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<LoadingSpinner />}
        endMessage={<p style={{ textAlign: 'center' }}>No more images!</p>}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={`https://picsum.photos/200/300?random=${index}`} alt={`Random pic ${index}`} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ImageGrid;
