import "./App.css";
import { useState } from "react";
import Post from "./components/Post/";
import imgs from "./components/img/boo.webp";

function App() {
  const [imagem, setImagem] = useState();
  const [title, setTitle] = useState("");
  const [legenda, setLegenda] = useState("");
  const [postList, setPostList] = useState([
    { title: "Meu cachorrinho", comment: "<3", image_post: imgs, key: 1 },
  ]);

  const handlePostSubmit = () => {
    const PostHandle = {
      title: title,
      comment: legenda,
      image_post: imagem || imgs,
      key: postList.length + 1,
    };

    setPostList([...postList, PostHandle]);
    setLegenda("");
    setTitle("");

    // console.log(PostHandle);
  };

  const handleChange = (e) => {
    // console.log(e.target.files[0]);
    const URI = URL.createObjectURL(e.target.files[0]);
    setImagem(URI);
  };

  return (
    <div className="app-window">
      <div className="post-maker">
        <h1>Criar post</h1>
        {/* <button className="btn-image"> */}
        <input type="file" onChange={handleChange} /> {/*Selecione uma imagem*/}
        {/* </button> */}
        <input
          type="text"
          placeholder="Digite um titulo"
          className="input-post"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Digite uma legenda"
          className="input-post"
          onChange={(e) => setLegenda(e.target.value)}
          value={legenda}
        />
        <button onClick={handlePostSubmit} className="btn-post">
          Criar post
        </button>
        {imagem != null && (
          <div>
            <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
              preview:
            </h2>
            <img src={imagem} alt="previw_image" className="preview" />
          </div>
        )}
      </div>
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
    </div>
  );
}

export default App;
