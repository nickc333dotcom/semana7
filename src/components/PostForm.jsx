import { useState } from "react";
import client from "../api/client";
import { Link, useNavigate } from "react-router-dom";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) return;

    await client.post("/posts", {
      title,
      content,
      date: new Date().toISOString().split("T")[0]
    });

    setTitle("");
    setContent("");
    navigate("/posts");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo Post</h2>

      <input
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Contenido"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <button disabled={!title || !content}>
        Crear Post
      </button>

      <Link to="/posts">Cancelar</Link>
    </form>
  );
}
