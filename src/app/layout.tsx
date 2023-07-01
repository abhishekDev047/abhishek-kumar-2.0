// "use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ReduxProvider } from '@/redux/features/Provider';
import NavBar from './Components/NavBar';


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
    <ReduxProvider>
    <html lang="en">
      <body>
      <header>
        <NavBar/>
      </header>

        <section>
           <div className='mt-20'>
          {children}
        </div>
        </section>
       
        <footer>
        </footer>
        </body>
    </html>
    </ReduxProvider>
  )
};
