import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Logout() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    async function logoutRequest() {
      axios
        .post('http://localhost:8000/logout', null, {
          withCredentials: true,
        })
        .then((res) => {
          console.log('RESPONSE: ', res.data);
        })
        .catch((err) => {
          console.log('RESPONSE: ', err.response.data);
        })
        .finally(() => {
          setDone(true);
        });
    }

    logoutRequest();
  }, []);

  if (!done) {
    return <main>Logging out...</main>;
  }

  return <main>Done.</main>;
}
