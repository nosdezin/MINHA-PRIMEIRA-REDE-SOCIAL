import "./App.css";
import { useState } from "react";
import imgs from "./components/img/boo.webp";

import PostMaker from "./components/PostMaker";
import PostListage from "./components/postListage";

function App() {
  const [imagem, setImagem] = useState();
  const [title, setTitle] = useState("");
  const [legenda, setLegenda] = useState("");
  const [postList, setPostList] = useState([
    { title: "Meu cachorrinho", comment: "<3", image_post: imgs, key: 1 },
  ]);

  const handlePostSubmit = () => {
    if (title !== "") {
      const PostHandle = {
        title: title,
        comment: legenda,
        image_post: imagem,
        key: postList.length + 1,
      };

      setPostList([...postList, PostHandle]);
      setLegenda("");
      setTitle("");
    } else {
      alert("Coloque um titulo");
    }
  };

  return (
    <div className="app-window">
      <PostMaker
        handlePostSubmit={handlePostSubmit}
        CommentFunc={setLegenda}
        ImageFunc={setImagem}
        TitleFunc={setTitle}
        title={title}
        imagem={imagem}
        legenda={legenda}
      />

      <PostListage postList={postList} />
    </div>
  );
}

export default App;
