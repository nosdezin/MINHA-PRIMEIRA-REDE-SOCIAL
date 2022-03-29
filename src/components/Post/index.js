import { useState } from "react";

export default function Post({ image, PostName, comment }) {
  const [likeCount, setLikeCount] = useState(0);
  const [islike, setIsLike] = useState(false);

  const likehandle = () => {
    if (islike) {
      setIsLike(false);
      setLikeCount(likeCount - 1);
    } else {
      setIsLike(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div>
      <h1>{PostName}</h1>
      <img src={image} alt="post_image" className="post_image" />
      {comment && (
        <p>
          Legenda: <strong>{comment}</strong>
        </p>
      )}
      <div className="like-bar">
        <button className={`like-button-${islike}`} onClick={likehandle}>
          Like
        </button>
        <p className="likes-count">Likes: {likeCount}</p>
      </div>
    </div>
  );
}
