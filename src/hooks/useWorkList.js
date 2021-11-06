import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function useWorkList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    async function fetchWorks() {
      const db = getDatabase();
      const workRef = ref(db, "data");
      const workQuery = query(workRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // requerst firebase database
        const snapshot = await get(workQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setWorks((prevWorks) => {
            return [...prevWorks, ...Object.values(snapshot.val())];
          });
        } else {
          //
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchWorks();
  }, []);

  return {
    loading,
    error,
    works,
  };
}
