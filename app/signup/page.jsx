'use client'
import { useState,useEffect} from 'react';
import styles from './Signup.module.css';





export default function Signup() {
 
  const [username,setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, email, password }),
      });

      if (response.ok) {
        window.location.href = '/';
      } 
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="text" className={styles.label}>Username:</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={styles.input}
          />
        </div>

        <button type="submit" className='btn'>Sign Up</button>
      </form>
    </div>
  );
}

export async function getServerSideProps({ req, res, router }) {
  return {
    props: {},
  };
}

