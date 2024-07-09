import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Input from './UI/Input';
import Button from './UI/Button';

const UserProfile = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setInput(storedUser);
        }
    }, []);

    function handleProfile(e) {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(input));
        navigate('/');
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value,
        }));
    }

    return (
        <section className='section-profile'>
            <div id='register-wrap'>
                <h1>User Profile</h1>
                <form onSubmit={handleProfile}>
                    <Input 
                        label="Full Name" 
                        name="fullname" 
                        value={input.fullname}
                        type="text" 
                        placeholder="Enter Your Full Name" 
                        onChange={handleInputChange}
                    />
                    <Input 
                        label="Email" 
                        name="email" 
                        value={input.email}
                        type="email" 
                        placeholder="Enter Your Email Address" 
                        onChange={handleInputChange}
                    />
                    <Input 
                        label="Password" 
                        name="password"
                        value={input.password}
                        type="password" 
                        placeholder="Password" 
                        onChange={handleInputChange}
                    />
                    <Button id="register" text="Update" />

                    <div className='btn-wrap'>
                        <button id='home-btn'>Back</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default UserProfile;
