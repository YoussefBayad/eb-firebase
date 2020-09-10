import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/User/user.actions';

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
  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
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
        <button className="btn" onClick={handleGoogleSignIn}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
