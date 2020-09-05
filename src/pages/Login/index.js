import React, { useState } from 'react';

// signInWithGoogle
import { signInWithGoogle, auth } from '../../Firebase/utils.js';

//style
import './index.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // sign in

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <div className="sign-in">
        <h1>SIGN iN</h1>
        <form onSubmit={handleSubmit}>
          {error && <h3 className="error">{error}</h3>}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn">Sign In</button>
        </form>
        <button className="btn" onClick={signInWithGoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
