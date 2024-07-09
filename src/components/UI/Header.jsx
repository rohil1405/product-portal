import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('user'));
    const handleLogout = () => {
        localStorage.removeItem('loggedin');
        navigate('/login');
    }
    return (
        <>
            <p>Welcome - {userName.fullname}</p>
            <button type='button' onClick={handleLogout}>Logout</button>
            <button>
                Cart (0)
            </button>
        </>  
    )  
}