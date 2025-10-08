import axios from "axios";
import { useEffect, useState } from "react";

const useDataFetch = () => {
  const [apps, setApps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("/AppData2.json")
      .then((res) => setApps(res.data))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);
  return { apps, error, loading };
};

export default useDataFetch;
