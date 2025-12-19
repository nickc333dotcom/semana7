import { useParams, Link } from "react-router-dom";
import { usePost } from "../hooks/usePosts";

export default function PostDetail() {
  const { id } = useParams();
  const { data: post, loading } = usePost(id);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/posts">⬅ Volver</Link>
    </div>
  );
}
