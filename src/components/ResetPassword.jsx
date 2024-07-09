import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './UI/Input';
import Button from './UI/Button';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    password: '',
    confirmPassword: ''
  });

  function handleReset(e) {
    e.preventDefault();
    // Reset password logic here
  }

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
            <Button id="reset" text="Reset Password" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
