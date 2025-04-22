import React from 'react';
import Footer from '../Components/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
    <div className="max-w-5xl mx-auto py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 text-lg">
        At <strong>Emmark-Tech</strong>, we are committed to protecting your personal information and your right to privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <p>We collect personal information that you voluntarily provide to us when you:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Register for our services or training</li>
          <li>Contact us for support or inquiries</li>
          <li>Visit our website or interact with our platform</li>
        </ul>
        <p className="mt-2">This information may include your name, email address, phone number, and any additional details you choose to provide.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Provide and improve our tech services and training programs</li>
          <li>Communicate with you about updates, offers, or support</li>
          <li>Understand user behavior to enhance user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
        <p>
          We do not sell, rent, or trade your personal information with third parties. We may share data with trusted partners or service providers who assist in delivering our services—under strict confidentiality agreements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          Your privacy is our priority. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or loss.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Access and review the data we hold about you</li>
          <li>Request corrections or deletions</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Cookies & Tracking Technologies</h2>
        <p>
          We may use cookies to enhance your browsing experience and analyze how you use our site. You can control cookie preferences in your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
        <p>
          Emmark-Tech reserves the right to update this policy as needed. We encourage you to review this page periodically for any changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at:
        </p>
        <p className="mt-2 font-medium">Email: support@emmarktech.com</p>
        <p className="font-medium">Phone: +234 000 000 0000</p>
      </section>
    </div>
    <Footer/></div>
  );
};

export default PrivacyPolicy;
