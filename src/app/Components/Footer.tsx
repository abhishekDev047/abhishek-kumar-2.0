import React from 'react';
import ContactTable from './ContactTable';


function Footer() {
    const zlatanq = `" The older I get, the better I get. Like red wine. "`;
    const zlatan = ` - Zlatan Ibrahimovic `;
    const bye = `Thank you for visiting my portfolio. Goodbye and stay inspired!`;
  return (
    <div className='flex flex-col items-center justify-center py-10 bg-[#6e07f3] text-white w-full px-5'>

    <div className='text-3xl underline text-center mt-10 mb-20'>
        {bye}
    </div>

    <div className='my-10 w-full'>
    <ContactTable quote={zlatanq} legend={zlatan}/>
    </div>

    </div>
  )
}

export default Footer;