"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Contact() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      router.push("/");

      const responseData = await response.json();

      toast.success(responseData["message"]);
    } catch (err) {
      console.error(err);
      toast.error("Error, please try resubmitting the form");
    } finally {
      setSubmitting(false); 
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div id='contact' className='h-14'></div>
      <div className='md:w-4/5 h-screen mx-auto flex md:mt-0 mt-28 mb-24 flex-col items-center justify-center'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white flex items-center'>
            Contact
          </p>
          <p className='w-32 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <p className='text-white text-justify mt-10 pb-4 px-6'>
          My inbox is always open. Whether you have a question or just want to
          say hello, I will try my best to get back to you!
        </p>
        <div className='flex flex-col md:flex-row items-center justify-center md:mt-4'>
          <Image
            src='/Images/contact.png'
            alt='Picture of contact'
            className='w-96 md:h-[350px] md:w-[600px]'
            width={300}
            height={400}
          />
          <div className='form md:w-[500px] mb-10'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <input
                id='name'
                type='text'
                name='name'
                required
                placeholder='Enter Full Name'
                className='p-2 rounded-lg outline-none bg-slate-800 text-white'
                value={formData.name}
                onChange={handleChange}
              />
              <input
                id='email'
                type='email'
                name='email'
                placeholder='Enter Your Email'
                required
                className='p-2 rounded-lg outline-none bg-slate-800 text-white'
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                id='message'
                name='message'
                required
                placeholder='Message'
                cols='30'
                rows='8'
                className='p-2 rounded-lg outline-none bg-slate-800 text-white'
                value={formData.message}
                onChange={handleChange}
              />
              <button
                className='relative h-10 p-2 bg-indigo-400 text-white rounded-lg'
                type='submit'
                disabled={submitting}
              >
                {submitting ? (
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='w-6 h-6 border-2 rounded-full border-t-0 animate-spin'></div>
                  </div>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
