import React from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

export const PrivacyPolicy: React.FC = () => (
  <div className="container mx-auto px-4 py-12 max-w-4xl">
    <h1 className="text-3xl font-bold text-primary mb-6">Privacy Policy</h1>
    <div className="bg-white p-8 rounded-lg shadow-md prose lg:prose-xl text-gray-700">
      <p className="mb-4"><strong>Last Updated: October 2024</strong></p>
      <p className="mb-4">At Sanjay Kumar Basak & Co., accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
      
      <h2 className="text-xl font-bold mt-6 mb-2">Log Files</h2>
      <p className="mb-4">We follow a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">Cookies and Web Beacons</h2>
      <p className="mb-4">Like any other website, we use 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">Google DoubleClick DART Cookie</h2>
      <p className="mb-4">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a></p>

      <h2 className="text-xl font-bold mt-6 mb-2">Our Advertising Partners</h2>
      <p className="mb-4">Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">GDPR Data Protection Rights</h2>
      <p className="mb-4">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, rectification, erasure, restrict processing, object to processing, and data portability.</p>
    </div>
    <AdPlaceholder format="horizontal" label="Footer Ad" />
  </div>
);

export const Disclaimer: React.FC = () => (
  <div className="container mx-auto px-4 py-12 max-w-4xl">
    <h1 className="text-3xl font-bold text-primary mb-6">Disclaimer</h1>
    <div className="bg-white p-8 rounded-lg shadow-md prose lg:prose-xl text-gray-700">
      <p className="mb-4"><strong>Last Updated: October 2024</strong></p>
      
      <h2 className="text-xl font-bold mt-6 mb-2">General Information</h2>
      <p className="mb-4">The information provided by Sanjay Kumar Basak & Co. ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">Professional Disclaimer</h2>
      <p className="mb-4">The Site cannot and does not contain professional financial or tax advice. The financial and tax information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of specific financial or tax advice via this website content.</p>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
        <p className="font-bold text-yellow-800">Important:</p>
        <p className="text-yellow-700">THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">External Links Disclaimer</h2>
      <p className="mb-4">The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
    </div>
    <AdPlaceholder format="horizontal" label="Footer Ad" />
  </div>
);

export const TermsConditions: React.FC = () => (
  <div className="container mx-auto px-4 py-12 max-w-4xl">
    <h1 className="text-3xl font-bold text-primary mb-6">Terms and Conditions</h1>
    <div className="bg-white p-8 rounded-lg shadow-md prose lg:prose-xl text-gray-700">
      <p className="mb-4"><strong>Last Updated: October 2024</strong></p>
      <p className="mb-4">Welcome to Sanjay Kumar Basak & Co.! These terms and conditions outline the rules and regulations for the use of our Website.</p>
      
      <h2 className="text-xl font-bold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">We employ the use of cookies. By accessing our website, you agreed to use cookies in agreement with the Sanjay Kumar Basak & Co.'s Privacy Policy.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">License</h2>
      <p className="mb-4">Unless otherwise stated, Sanjay Kumar Basak & Co. and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from our website for your own personal use subjected to restrictions set in these terms and conditions.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">You must not:</h2>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Republish material from this website</li>
        <li>Sell, rent or sub-license material from this website</li>
        <li>Reproduce, duplicate or copy material from this website</li>
        <li>Redistribute content from this website</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">Content Liability</h2>
      <p className="mb-4">We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.</p>
    </div>
    <AdPlaceholder format="horizontal" label="Footer Ad" />
  </div>
);