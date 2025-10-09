import axios from "axios";
import { useEffect, useState } from "react";

const useDataFetch = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("/AppData.json")
      .then((res) => setApps(res.data))
      .catch((err) => console.error("Data fetch error:", err))
      .finally(() => setLoading(false));
  }, []);
  return { apps, loading };
};

export default useDataFetch;
