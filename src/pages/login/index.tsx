import axios from 'axios';
import { useState } from 'react';

export default function Login({ url }: { url: string }) {
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
            .post('http://localhost:8000/login', form, {
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
        <button type="submit">Login</button>
        <a href={url}>Google Login</a>
      </form>
    </main>
  );
}

export async function getStaticProps() {
  const params = {
    client_id: process.env.GOOGLE_CLIENT_ID as string,
    redirect_uri: 'http://localhost:3000/login/google',
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/userinfo.email',
    // https://developers.google.com/identity/sign-in/web/devconsole-project
    include_granted_scopes: 'true',
  };
  const query = new URLSearchParams(params);
  const url =
    'https://accounts.google.com/o/oauth2/v2/auth?' + query.toString();

  return { props: { url } };
}
