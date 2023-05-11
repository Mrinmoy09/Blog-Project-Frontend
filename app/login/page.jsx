'use client'
import { useState,useEffect} from 'react';
import styles from './Login.module.css';


export default function Signup() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password }),
      });

      if (response.ok) {
        window.location.href = '/';
        console.log(email,password)
      } 
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Please Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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

        <button type="submit" className='btn'>Login</button>
      </form>
    </div>
  );
}

export async function getServerSideProps({ req, res, router }) {
  return {
    props: {},
  };
}

