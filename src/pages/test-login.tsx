import axios from 'axios';

export default function TestLogin() {
  return (
    <main>
      <h1>Test if you&apos;re authenticated</h1>
      <button
        onClick={(e) => {
          axios
            .get('http://localhost:8000/test/login', {
              withCredentials: true,
            })
            .then((res) => {
              console.log('RESPONSE: ', res.data);
            })
            .catch((err) => {
              console.log('RESPONSE: ', err.response.data);
            });
        }}
      >
        Press Me
      </button>
    </main>
  );
}
