import './globals.css'
import { AuthProvider } from './utils/authContext';
import { Poppins } from 'next/font/google'
import Header from './components/Header';


const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <body className={poppins.className}>
        
        <AuthProvider>
        <Header />
        <main className='container'>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
