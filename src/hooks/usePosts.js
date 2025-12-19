import client from "../api/client";
import useFetch from "./useFetch";

export function usePosts() {
  return useFetch(() => client.get("/posts"), []);
}

export function usePost(id) {
  return useFetch(() => client.get(`/posts/${id}`), [id]);
}
