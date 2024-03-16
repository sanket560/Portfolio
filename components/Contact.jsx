import Image from "next/image";

function Contact() {
  return (
    <>
      <div id='contact' className='h-14'></div>
      <div className='md:w-4/5 h-screen mx-auto flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white flex items-center'>
            Contact
          </p>
          <p className='w-32 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center md:mt-10'>
          <div className='contact md:w-1/3 md:mb-10'>
            <Image
              src='/Images/contact.png'
              alt='Picture of contact'
              width={300}
              height={150}
            />
            <p className='text-white px-6 text-justify pb-5'>
              My inbox is always open. Whether you have a question or just want
              to say hello, I will try my best to get back to you!
            </p>
          </div>
          <div className='form md:w-1/3 mb-10'>
            <form
              action='https://formspree.io/f/xvonedlw'
              method='post'
              className='flex flex-col gap-4'
            >
              <input
                type='text'
                name='name'
                placeholder='Full Name'
                className='p-2 rounded-lg outline-none bg-slate-800 text-white'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='p-2 rounded-lg outline-none bg-slate-800 text-white'
                required
              />
              <textarea
                type='text'
                name='message'
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

export default Contact;
