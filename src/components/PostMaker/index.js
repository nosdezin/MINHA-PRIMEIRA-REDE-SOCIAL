import React from "react";

export default function PostMaker({
  handlePostSubmit,
  imagem,
  title,
  legenda,
  TitleFunc,
  CommentFunc,
  ImageFunc,
}) {
  const handleChange = (e) => {
    const URI = URL.createObjectURL(e.target.files[0]);
    ImageFunc(URI);
  };
  return (
    <div className="post-maker">
      <h1>Criar post</h1>
      <button className="btn-image">
        <input type="file" onChange={handleChange} />
      </button>
      <input
        type="text"
        placeholder="Digite um titulo"
        className="input-post"
        onChange={(e) => TitleFunc(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Digite uma legenda"
        className="input-post"
        onChange={(e) => CommentFunc(e.target.value)}
        value={legenda}
      />
      <button onClick={handlePostSubmit} className="btn-post">
        Criar post
      </button>
      {imagem != null && (
        <div>
          <h2 style={{ textAlign: "center", paddingTop: "10px" }}>preview:</h2>
          <img src={imagem} alt="previw_image" className="preview" />
        </div>
      )}
    </div>
  );
}
