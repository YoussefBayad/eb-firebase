import React, { useState } from 'react';

// auth

import { auth, handleUserProfile } from '../../Firebase/utils.js';

// style
import './index.scss';

const Registration = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // password check

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    } else {
      setError(null);
    }

    try {
      // register

      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });

      // reset input field

      setDisplayName('');
      setConfirmPassword('');
      setPassword('');
      setEmail('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact-information">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <h2 className="error">{error}</h2>
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

        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default Registration;
