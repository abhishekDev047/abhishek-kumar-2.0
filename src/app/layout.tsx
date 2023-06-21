import Navbar from './Components/Navbar';
import './globals.css';
import { ReduxProvider } from '@/redux/features/Provider';


export const metadata = {
  title: 'Abhishek Kumar',
  description: 'Hey welcome to my portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>
    <html lang="en">
      <body>
      <header>
        <Navbar/>
      </header>

        <section>
           <div>
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
