import { useEffect, useState } from "react";

export default function useFetch(fetchFn, deps = []) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFn()
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, deps);

  return { data, loading };
}
