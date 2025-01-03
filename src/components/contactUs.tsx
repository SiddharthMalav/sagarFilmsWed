"use client"
import React, { useState } from 'react'
// import emailjs from 'emailjs-com';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactUs = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("eee", e)
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("e", formState)
    // emailjs
    //   .send(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     {
    //       firstName: formState.firstName,
    //       lastName: formState.lastName,
    //       email: formState.email,
    //       phoneNumber: formState.phoneNumber,
    //       message: formState.message,
    //     },
    //     'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    //   )
    //   .then(
    //     () => {
    //       alert('Message sent successfully!');
    //       setFormState({
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         phoneNumber: '',
    //         message: '',
    //       });
    //     },
    //     (error) => {
    //       alert('Failed to send message. Please try again.');
    //       console.error('EmailJS error:', error);
    //     }
    //   );
  };

  return (
    <div className="bg-white py-24  sm:py-32">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

        <div>
          <div className="isolate bg-slate-900 py-8 rounded-xl text-white px-6 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute  inset-x-0  transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              />
            </div>
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold ">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="firstName"
                      name="firstName"
                      placeholder='Enter your First Name'
                      type="text"
                      value={formState.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="text-black block w-full rounded-md bg-white px-3.5 py-2 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold ">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="lastName"
                      placeholder='Enter your Last Name'
                      name="lastName"
                      type="text"
                      value={formState.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className="text-black block w-full rounded-md bg-white px-3.5 py-2 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold ">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder='Enter your Email'
                      autoComplete="email"
                      className="text-black block w-full rounded-md bg-white px-3.5 py-2 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm/6 font-semibold ">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                      </div>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        value={formState.phoneNumber}
                        onChange={handleChange}
                        placeholder="123-456-7890"
                        className="text-black block min-w-0 grow py-1.5 pl-1 pr-3 text-base  placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold ">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder='Enter your Message'
                      className="text-black block w-full rounded-md bg-white px-3.5 py-2 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let&apos;s talk
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h2 className="text-3xl pb-4 font-bold tracking-tight sm:text-4xl max-lg:text-center">Contact Us</h2>
          <h2 className="lg:pl-4 max-lg:justify-center  text-2xl flex items-center gap-2 font-semibold tracking-tight sm:text-3xl max-lg:text-center"><svg height={20} className='pt-[4px]' width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg> Office</h2>
          <p className="lg:pl-4 text-gray-500 max-lg:text-center"> H NO. 114 Laxman Vihar II</p>
          <p className="lg:pl-4 mb-2 text-gray-500 max-lg:text-center"> Kunhadi, Kota</p>
          <h2 className="lg:pl-4 max-lg:justify-center  text-2xl flex items-center gap-2 font-semibold tracking-tight sm:text-3xl max-lg:text-center"><svg height={20} className='pt-[4px]' width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>Working Hours</h2>
          <p className="lg:pl-4 mb-2 text-gray-500 max-lg:text-center">Monday to Saturday: 10.00 AM – 10.00 PM</p>

        </div>
      </div>
    </div>)
}

export default ContactUs