"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
// import { ReduxProvider } from '@/redux/features/Provider';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


export const metadata = {
  title: 'Abhishek Kumar',
  description: 'Hey welcome to my portfolio site',
};

export default function RootLayout({
  children
}:{
  children: React.ReactNode
}) {
  return (
    // <ReduxProvider>
    <html lang="en">
      <body>
      <header>
        <NavBar/>
      </header>

        <section className='mainbody'>
           <div className=''>
          {children}
        </div>
        </section>
       
        <footer className='text-lg mt-10 w-full'>
          <Footer/>
        </footer>
        </body>
    </html>
    // </ReduxProvider>
  )
};
