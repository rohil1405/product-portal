import { useNavigate, Link } from 'react-router-dom';
import '../../index.css';

export default function Header() {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('user'));
    const handleLogout = () => {
        localStorage.removeItem('loggedin');
        navigate('/login');
    }
    return (
            <section>
                <div className='header-wrap'>
                    <header>
                        <div>
                            Welcome-{userName.fullname}
                        </div>

                        <div>
                            <Link to='/profile'>
                                Profile
                            </Link>
                        </div>

                        <div>
                        <button>
                            Cart (0)
                        </button>
                        <button type='button' onClick={handleLogout}>Logout</button>
                        </div>
                    </header>
                </div>
            </section>
    )  
}