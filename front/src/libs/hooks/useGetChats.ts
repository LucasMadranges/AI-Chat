import axios from '@/libs/api/axiosConfig';
import { useEffect, useState } from 'react';

export default function useGetChats() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchChats() {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get('chat');
        if (res.status === 200) {
          setItems(res.data);
        } else {
          setItems([]);
        }
      } catch (err) {
        setItems([]);
        setError(err);
      } finally {
        setLoading(false);
        setError(null);
      }
    }

    fetchChats();
  }, []);

  return { items, loading, error };
}
