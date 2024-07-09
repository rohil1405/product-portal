import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './UI/Input';
import Button from './UI/Button';
import './Password.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
  });

  function handleForgot(e) {
    e.preventDefault();
    const ForgotPassworduser = JSON.parse(localStorage.getItem('user'));

    if (input.email === ForgotPassworduser.email) {
      localStorage.setItem('ForgotPassword', true);
      navigate('/reset');
    } else {
      alert('Please Enter Valid Email');
    }
  }

  return (
    <section>
      <div className='password-wrap'>
        <div className='password-main'>
          <h1>Forgot Password</h1>
          <form onSubmit={handleForgot}>
            <Input 
              label="Email" 
              name="email"
              value={input.email}
              type="email" 
              placeholder="Enter Email Address" 
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            />
            
            <Button id="password" text="Forgot Password" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
