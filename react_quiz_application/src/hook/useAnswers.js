import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

function useAnswers(VideoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + VideoID + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapspot = await get(answerQuery);
        setLoading(false);

        if (snapspot.exists()) {
          setAnswers((previous) => {
            return [...previous, ...Object.values(snapspot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [VideoID]);

  return {
    loading,
    error,
    answers,
  };
}

export default useAnswers;
