import React, { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"


export const SignUp = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const emailPassword = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (event:
    React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current ? emailRef.current.value : '';
    const password = emailPassword.current ? emailPassword.current.value : '';
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }


  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" ref={emailRef}/>
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" ref={emailPassword}/>
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
};
