import React from "react";

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "1. Introduction",
      description:
        "Our Remittance App is committed to protecting the privacy of our users. This privacy policy outlines how we collect, use, disclose, and manage your personal information. We strive to comply with privacy laws and regulations in all countries where our services can be used.",
    },
    {
      title: "2. Collection of Personal Information",
      description:
        "We may collect your name, address, date of birth, email address, phone number, and other personal information necessary to provide you with our services. We may also collect information about your financial transactions and may require you to provide government-issued identification documents to comply with money laundering laws.",
    },
    {
      title: "3. Use of Personal Information",
      description:
        "We use your personal information to verify your identity, process payments, and provide customer support. We may also use your information to improve our services, communicate with you about our products and services, and send you marketing materials if you opt-in to receive them.",
    },
    {
      title: "4. Disclosure of Personal Information",
      description:
        "We may disclose your personal information to our service providers who assist us in providing our services. We may also disclose your personal information to comply with legal obligations or to protect our rights, property, or safety. We may share your personal information with third-party advertisers, but only with your consent.",
    },
    {
      title: "5. Security of Personal Information",
      description:
        "We use security measures to protect your personal information, including encryption, firewalls, and secure networks. We also limit access to your personal information to employees and service providers who need it to perform their job duties.",
    },
    {
      title: "6. Access and Correction of Personal Information",
      description:
        "You have the right to access and correct your personal information. To access or correct your personal information, please contact us at contact@payyservices.com.",
    },
    {
      title: "7. Retention of Personal Information",
      description:
        "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law.",
    },
    {
      title: "8. Changes to Privacy Policy",
      description:
        "We may amend this privacy policy from time to time. Any changes will be posted on our website, and users who have provided us with contact information will be notified via email.",
    },
    {
      title: "9. Contact Us",
      description:
        "If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at contact@payyservices.com",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1500px] bg-gray-50 min-h-screen mt-14 py-5">
      <h1 className="text-5xl mb-10 font-light pl-10 bg-sail-300 text-white w-full py-5 border-b border-gray-300">
        Privacy Policy
      </h1>

      {policies.map((policy, index) => (
        <div
          key={index}
          className="flex flex-col w-full max-w-[1200px] mx-auto mb-10 px-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            {policy.title}
          </h2>
          <p className="text-sm md:text-lg text-gray-600 mt-3">
            {policy.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
