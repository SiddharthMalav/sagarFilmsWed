const ContactUs = () => {
  return (
    <div className="bg-[url('/images/reachOutToUsBg.png')] py-20 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-center pb-8 sm:text-4xl">
      Reach Out to Us</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
  
        {/* Office Section */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            <svg
              height={20}
              width={20}
              className="pt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
            </svg>
            Office
          </div>
          <p className="text-gray-800">H NO. 114 Laxman Vihar II</p>
          <p className="text-gray-800">Kunhadi, Kota</p>
        </div>
  
        {/* Working Hours Section */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            <svg
              height={20}
              width={20}
              className="pt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            Working Hours
          </div>
          <p className="text-gray-800">
            Monday to Saturday:<br />
            10.00 AM – 10.00 PM
          </p>
        </div>
  
      </div>
    </div>
  </div>
  )  
}

export default ContactUs