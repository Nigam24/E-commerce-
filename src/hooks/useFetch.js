import { useState, useEffect } from 'react';
import { getData } from '../utils/apiCall';

export function useFetch(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
     try {
      getData(path)
       .then(data=>setData(data))
       .catch(er=>setError(er))
      
     } catch (error) {
      setError(error)
     }
    };

    fetchData();
  }, [path]);

  return { data, error };
}