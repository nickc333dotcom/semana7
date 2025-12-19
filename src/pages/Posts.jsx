import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import Pagination from "../components/Pagination";

export default function Posts() {
  const { data: posts, loading } = usePosts();

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Posts</h1>

      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <Link to={`/posts/${post.id}`}>Leer más</Link>
        </div>
      ))}

      <Pagination />
    </div>
  );
}
