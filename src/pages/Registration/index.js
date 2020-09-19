import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/forms/Button/index.js';
import { auth, handleUserProfile } from '../../Firebase/utils.js';

// style
import './index.scss';

const Registration = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.currentUser);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push('/');
    }
  }, [currentUser]);

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch();
    // signUpUserStart({
    //   displayName,
    //   email,
    //   password,
    //   confirmPassword,
    // })
  };

  return (
    <div className="contact-information">
      <h1>Register</h1>
      {errors.length > 0 && (
        <ul>
          {errors.map((err, index) => {
            return <li key={index}>{err}</li>;
          })}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          placeholder="Enter your name"
          value={displayName}
          name="displayName"
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button className="btn">Register</Button>
      </form>
    </div>
  );
};

export default Registration;
