import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Input from './UI/Input';
import Button from './UI/Button';
import LinkComponent from './UI/LinkComponent';

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input));
    navigate('/login');
  }

  return (
    <div id='register'>
      <section id='section-register-wrap'>
        <div id='register-wrap'>
          <h1>CREATE AN ACCOUNT</h1>
          <form onSubmit={handleSubmit}>

            <Input 
              label="Full Name" 
              name="fullname" 
              value={input.fullname}
              type="text" 
              placeholder="Enter Your Full Name" 
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            />
            <Input 
              label="Email" 
              name="email" 
              value={input.email}
              type="email" 
              placeholder="Enter Your Email Address" 
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            />

            <Input 
              label="Password" 
              name="password"
              value={input.password}
              type="password" 
              placeholder="Password" 
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            />

            <Button id="register" text="Register" />
            
            <LinkComponent to="/login" text="Have already an account? Login here" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
