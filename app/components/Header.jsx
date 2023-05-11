import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../utils/authContext';

const Header = () => {
  const authContext = useContext(AuthContext);

  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>BlogoPedia</Link>
        </div>
        <div className='links'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          {authContext.isLoggedIn ? (
            <button>
              <Link>Logout</Link>
            </button>
          ) : (
            <>
              <Link href='/login'>Login</Link>
              <Link href='/signup'>Signup</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
