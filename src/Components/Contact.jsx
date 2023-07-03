import React from 'react'
import contactimg from '../Images/contact.png'
function Contact() {
  return (
    <>
      <div id='contact' className='h-14'></div>
      <div className='md:w-4/5 h-full mx-auto  '>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white flex items-center'>
            <img
              width='50'
              height='50'
              src='https://img.icons8.com/external-itim2101-flat-itim2101/64/external-call-medical-and-health-itim2101-flat-itim2101.png'
              alt='email--v1'
            />
            Contact
          </p>
          <p className='w-32 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center md:mt-10'>
          <div className='contact md:w-1/3 md:mb-10'>
            <img src={contactimg} alt='' />
            <p className='text-white px-10 pb-5'>
              My inbox is always open. Whether you have a question or just want
              to say hello, I will try my best to get back to you!
            </p>
          </div>
          <div className='form w-80 md:w-1/3 mb-10'>
            <form
              action='https://formspree.io/f/xvonedlw'
              method='post'
              className='flex flex-col gap-4'
            >
              <input
                type='text'
                name='name'
                id=''
                placeholder='Full Name'
                className='p-2 rounded-lg outline-none bg-slate-800 text-white'
                required
              />
              <input
                type='email'
                name='email'
                id=''
                placeholder='Email'
                className='p-2 rounded-lg outline-none bg-slate-800 text-white'
                required
              />
              <textarea
                name='message'
                id=''
                placeholder='Message'
                cols='30'
                rows='8'
                className='p-2 rounded-lg outline-none bg-slate-800 text-white'
                required
              />
              <button
                className='p-2 bg-indigo-400 text-white rounded-lg'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact