"use client";
import React, { useState } from "react";
import payyBanner from "../../assets/payy_mobile_banner.jpg";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import Swipper from "@/components/SwipperShowcase"



const OurServices: React.FC = () => {


  return (
    <div className="flex flex-col w-full max-w-[1500px] bg-gray-50 min-h-screen mt-14 py-5">
      <h1 className="text-5xl mb-10 font-light pl-10 bg-sail-300 text-white w-full py-5 border-b border-gray-300">
        Our App
      </h1>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full object-cover">
          <Image
            src={payyBanner}
            layout="responsive"
            width={700}
            height={475}
            className="h-full w-full object-cover"
            alt="Payy"
          />
        </div>

        <div className="w-full md:w-full text-gray-500 flex flex-col gap-3 justify-start items-end text-end p-10 bg-white">
          <div className="text-4xl uppercase text-sail-300">PayyRemit App</div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">Multi-currency</p>
            <p>Refer rates by various base currency</p>
            <p className="text-xl font-medium">Transfer</p>
            <p>Fast, secure, affordable with no hidden fees</p>
            <p className="text-xl font-medium">Ease</p>
            <p>Easy to use functionality</p>
          </div>
          <button className="bg-[#83B7D4] flex justify-center py-4 px-10 hover:bg-[#BADBED] transition-all duration-300 items-center gap-4 mt-10 rounded-lg text-white">
            <p>Download Now</p>
            <FaDownload />
          </button>
        </div>
      </div>
      <section id="screenshots" className="w-full max-w-full">
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-12">
            <h1 className="flex items-center text-5xl font-light pl-10 w-full py-3 text-gray-400">
              PREVIEWS <hr className="w-full ml-10 border-2 border-gray-300" />
            </h1>
          </div>
          <Swipper />

        </div>
      </section>

      <section className="w-full max-w-full">
        <h1 className="flex items-center text-6xl font-light pl-10 w-full py-3 text-gray-400">
          App Info <span className="flex-grow ml-10"><hr className="border-2 border-gray-300" /></span>
        </h1>

        <h2 className="text-4xl pl-10 py-3 text-gray-300"> Introduction </h2>
        <p className="px-10 pb-5">
          Sending money overseas can be a complex and stressful process. Fortunately, our remittance app for iOS is here to simplify the process and offer a fast, secure, and affordable way to transfer funds to your loved ones around the world.
        </p>

        <p className="px-10 pb-5">
          The registration process for our app is simple and straightforward. After downloading the app from the App Store, you'll be prompted to create an account using your personal information. We'll need your name, address, and phone number to get started.
        </p>

        <p className="px-10 pb-5">
          From there, it's time to check rates, conversion, and start sending money! Our app makes it easy to send funds to your loved ones anywhere in the world. Simply enter the recipient's information, including their name and bank account details, and the amount you wish to send. You can also choose to send a message along with your transfer to let your loved one know you're thinking of them.
        </p>

        <p className="px-10 pb-5">
          Our app is designed to be fast and reliable, with transfers typically completing within a matter of hours. You'll receive updates on the status of your transfer, so you can stay informed every step of the way.
        </p>

        <p className="px-10 pb-5">
          But what about security? We take security very seriously, which is why our app is built with security features to protect your transactions and personal information.
        </p>

        <p className="px-10 pb-5">
          And when it comes to fees, we believe in transparency. Our app offers competitive rates on the market, with no hidden fees or charges. You'll always know exactly what you're paying for, and you can feel confident that your money is being transferred at an affordable rate.
        </p>

        <p className="px-10 pb-5">
          And when it comes to fees, we believe in transparency. Our app offers competitive rates on the market, with no hidden fees or charges. You'll always know exactly what you're paying for, and you can feel confident that your money is being transferred at an affordable rate.
        </p>
        <p className="px-10 pb-5">
          In addition to our core remittance services, our app offers a range of additional features and benefits. You can view your transaction history, track the status of your transfers, and manage your account settings all from within the app. We also offer 24/7 customer support, so you can reach out to us anytime if you have questions or concerns.
        </p>

        <p className="px-10 pb-5">
          In conclusion, if you're looking for a fast, secure, and affordable way to send money overseas, our remittance app for iOS is the perfect solution. With a simple registration process, a wide range of payment options, and top-notch security features, you can feel confident that your transfers will be safe and reliable every time.
        </p>

        <h2 className="text-4xl pl-10 py-3 text-gray-300"> Why us? </h2>
        <p className="px-10 pb-5">
          Send money overseas with ease and confidence! Our remittance app for iOS offers fast, secure, and affordable transfers - all from your iPhone or iPad.
        </p>

        <div className="px-10">
          <button className="bg-[#83B7D4] flex justify-center py-4 px-10 hover:bg-[#BADBED] transition-all duration-300 items-center gap-4 mt-10 rounded-lg text-white">
            <p>Download Now</p>
            <FaDownload />
          </button>
        </div>


      </section>




    </div>
  );
};

export default OurServices;
