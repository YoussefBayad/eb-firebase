import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../Firebase/utils';
import Button from '../../components/forms/Button';

//style
import './index.scss';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.currentUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }
  }, [currentUser, history]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError(null);
  };

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
        <Button
          onClick={() =>
            auth.signInWithEmailAndPassword('Admin@eb.com', 'qQ123456')
          }
        >
          Login as Admin
        </Button>
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

          <Button className="btn">Sign In</Button>
        </form>
        <Button className="btn" onClick={signInWithGoogle}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
