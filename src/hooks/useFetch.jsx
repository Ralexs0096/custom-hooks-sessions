import { useEffect, useState } from 'react';

/**
 * fetches the data from an specified url
 * @param {*} url
 * @returns data, isLoading and the error
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError('Something went wrong');
          return;
        }

        const result = await response.json();
        setData(result.allUsers);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading: loading,
    error
  };
};

export default useFetch;
