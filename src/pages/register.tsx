import axios from 'axios';
import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({});

  function fillField(fieldName: string, event: any) {
    const value: any = event.target.value;
    setForm(Object.assign(form, { [fieldName]: value }));
  }

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post('http://localhost:8000/register', form, {
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
        <input
          id="username"
          onChange={(e) => {
            fillField('username', e);
          }}
        />
        <input
          id="password"
          type="password"
          onChange={(e) => {
            fillField('password', e);
          }}
        />
        <button type="submit">Register</button>
      </form>
    </main>
  );
}
