import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Google() {
  const [done, setDone] = useState(false);

  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      console.log(code);
      axios
        .post('http://localhost:8000/login/google?googletoken=' + code, null, {
          withCredentials: true,
        })
        .then((res) => {
          console.log('RESPONSE: ', res);
          setDone(true);
        })
        .catch((err) => {
          console.log('RESPONSE: ', err.response.data);
        });
    }
  }, [code]);

  if (!done) {
    return <main>Logging in Google...</main>;
  }

  return <main>Done.</main>;
}
