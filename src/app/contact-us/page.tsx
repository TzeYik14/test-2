import React from 'react';

export default function ContactUs() {
  return (
    <div className="flex flex-col w-full max-w-[1500px] bg-gray-50 min-h-screen mt-14 py-5">
      <h1 className="text-5xl mb-10 font-light pl-10 bg-sail-300 text-white w-full py-5 border-b border-gray-300">
        Contact Us
      </h1>
      <form target="_blank" action="https://formsubmit.co/contact@payyservices.com" method="POST">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="bg-white w-full md:w-2/3 flex flex-col justify-start p-10 gap-4">
            <div>
              <p className="text-2xl text-[#83B7D4]">CONTACT US</p>
              <p className="text-gray-400">Drop us a line!</p>
            </div>

            <input
              placeholder="Name"
              name="name"
              className="w-full p-3 px-5 bg-gray-100 rounded-lg focus:outline-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="w-full p-3 px-5 bg-gray-100 rounded-lg focus:outline-gray-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              className="w-full p-3 px-5 bg-gray-100 rounded-lg focus:outline-gray-300"
            />
            <textarea
              placeholder="Message"
              rows={5}
              name="message"
              required
              className="w-full min-h-[200px] p-3 px-5 bg-gray-100 rounded-lg focus:outline-gray-300"
              style={{ resize: "none" }}
            />
            <button type="submit" className="bg-[#83B7D4] p-3 px-10 mt-10 rounded-lg text-white">
              SEND
            </button>
          </div>
          <div className="bg-[#BADBED] w-full md:w-1/3 h-full flex flex-col justify-end p-10 gap-4">
            <div className="text-end flex flex-col">
              <p className="text-2xl text-white">Email</p>
              <p className="text-gray-100">contact@payyservices.com</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
