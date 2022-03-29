import React from "react";
import Post from "../Post";

export default function postListage({ postList }) {
  return (
    <div className="post-list">
      <div className="post-image-list">
        {postList.map((item) => (
          <div>
            <Post
              PostName={item.title}
              comment={item.comment}
              image={item.image_post}
              key={item.key}
            />
            {postList.length > 1 && <div className="line" />}
          </div>
        ))}
      </div>
    </div>
  );
}
