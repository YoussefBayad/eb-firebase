import React from 'react';

// signInWithGoogle
import { signInWithGoogle } from '../../Firebase/utils.js';

//style
import './index.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="sign-in">
        <h1>SIGN iN</h1>

        <button className="btn" onClick={signInWithGoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
