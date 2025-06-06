import React from "react";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto py-16 px-6 text-white">
          <h1 className="text-4xl font-bold mb-6 text-black">Privacy Policy</h1>
          <p className="mb-6 text-lg text-black font-semibold">
            At <strong className="text-blue-600">Emmark-Tech</strong>, we are committed to protecting your
            personal information and your right to privacy. This Privacy Policy
            outlines how we collect, use, disclose, and safeguard your data when
            you interact with our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl mb-2 text-black font-bold">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 font-semibold">
              We collect personal information that you voluntarily provide to us
              when you:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 font-semibold">
              <li>Register for our services or training</li>
              <li>Contact us for support or inquiries</li>
              <li>Visit our website or interact with our platform</li>
            </ul>
            <p className="mt-2 text-gray-700 font-semibold">
              This information may include your name, email address, phone
              number, and any additional details you choose to provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-2 text-black font-bold">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 font-semibold">We use your information to:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 font-semibold">
              <li>
                Provide and improve our tech services and training programs
              </li>
              <li>Communicate with you about updates, offers, or support</li>
              <li>Understand user behavior to enhance user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-2 text-black font-bold">
              3. Sharing Your Information
            </h2>
            <p  className="text-gray-700 font-semibold">
              We do not sell, rent, or trade your personal information with
              third parties. We may share data with trusted partners or service
              providers who assist in delivering our services—under strict
              confidentiality agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-black">4. Data Security</h2>
            <p className="text-gray-700 font-semibold">
              Your privacy is our priority. We implement appropriate technical
              and organizational measures to protect your data against
              unauthorized access, alteration, or loss.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-2 text-black font-bold">5. Your Rights</h2>
            <p className="text-gray-900 font-semi-bold">You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 font-semibold">
              <li>Access and review the data we hold about you</li>
              <li>Request corrections or deletions</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-2 text-black font-bold">
              6. Cookies & Tracking Technologies
            </h2>
            <p  className="text-gray-700 font-semibold">
              We may use cookies to enhance your browsing experience and analyze
              how you use our site. You can control cookie preferences in your
              browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-2 text-black font-bold">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700 font-semibold">
              Emmark-Tech reserves the right to update this policy as needed. We
              encourage you to review this page periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-2 text-black font-bold">8. Contact Us</h2>
            <p className="text-gray-700 font-semibold">
              If you have any questions or concerns about this Privacy Policy or
              your personal data, please contact us at:
            </p>
            <p className="mt-2 font-medium text-gray-700 font-semibold">Email: helpdesk@emmarktech.com</p>
            <p className="font-medium text-gray-700 font-semibold">Phone: +234 813 016 9810</p>
          </section>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
