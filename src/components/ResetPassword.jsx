import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './UI/Input';
import Button from './UI/Button';
import './Password.css';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleReset = (e) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const loggeduser = JSON.parse(localStorage.getItem('user'));

    if (!loggeduser) {
      alert('User not found. Please register.');
      return;
    }

    loggeduser.password = input.password;
    localStorage.setItem('user', JSON.stringify(loggeduser));
    localStorage.removeItem('ForgotPassword');
    navigate('/login');
  };

  return (
    <section>
      <div className='password-wrap'>
        <div className='password-main'>
          <h1>Reset Password</h1>
          <form onSubmit={handleReset}>
            <Input 
              label="Password" 
              name="password"
              value={input.password}
              type="password" 
              placeholder="Password" 
              onChange={(e) => setInput({ 
                ...input, 
                [e.target.name]: e.target.value 
            })}
            />
            <Input 
              label="Confirm Password" 
              name="confirmPassword"
              value={input.confirmPassword}
              type="password" 
              placeholder="Confirm Password" 
              onChange={(e) => setInput({ 
                ...input, 
                [e.target.name]: e.target.value })}
            />
            <Button id="password" text="Reset Password" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
