import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../components/Login.css';
import Input from './UI/Input';
import Button from './UI/Button';
import LinkComponent from './UI/LinkComponent';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem('user'));

    if (input.email === loggeduser.email && input.password === loggeduser.password) {
      localStorage.setItem('loggedin', true);
      navigate('/');
    } else {
      alert('Enter Valid Email and Password');
    }
  };

  return (
    <section id='section-login-wrap'>
      <div id='login-wrap'>
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
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

          <div id='forgot-link'>
            <Link to='/forgot'>
              Forgot Password?
            </Link>
          </div>

          <Button id="login" text="Login" />
          <LinkComponent to="/register" text="Don't have an account? Register here" />

        </form>
      </div>
    </section>
  );
}

export default Login;
