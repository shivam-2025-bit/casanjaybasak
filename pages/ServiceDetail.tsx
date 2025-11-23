import React from 'react';
import { Service, ProfileData } from '../types';
import { ArrowLeft, CheckCircle, ShieldCheck, Mail, CreditCard, QrCode } from 'lucide-react';

interface ServiceDetailProps {
  service: Service;
  profile: ProfileData;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, profile, onBack }) => {
  
  const generateEmailLink = () => {
    const subject = `Request for ${service.title}`;
    const body = `Dear Sanjay Kumar Basak,\n\nI requisite solution for ${service.title}.\n\nPlease provide payment confirmation.\n\nThank you.`;
    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content - Steps */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-full">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8 text-primary" })}
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                 <h2 className="text-xl font-bold text-gray-800 mb-4">How it works</h2>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Review Service & Pay</h3>
                        <p className="text-sm text-gray-500">Review the details and complete the payment using the details provided.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Request Solution via Email</h3>
                        <p className="text-sm text-gray-500">Click the button below to send us a formal request email.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Receive Full File</h3>
                        <p className="text-sm text-gray-500">Once payment is confirmed, you will receive the full file and solution.</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-green-600" /> Payment Protection Commitment
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium mb-2">Money Back Guarantee</p>
                <p className="text-sm text-green-700">
                  We are committed to your satisfaction. The money will be refunded if you are not satisfied with the delivered solution. Your payment is protected.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar - Payment & Action */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 border-t-4 border-secondary">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-gray-500" /> Payment Details
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="text-gray-500 text-xs uppercase">Bank Name</p>
                  <p className="font-medium text-gray-900">{profile.bankName || 'Not Set'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="text-gray-500 text-xs uppercase">Account Name</p>
                  <p className="font-medium text-gray-900">{profile.accountName || 'Not Set'}</p>
                </div>
                 <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="text-gray-500 text-xs uppercase">Account Number</p>
                  <p className="font-medium text-gray-900">{profile.accountNumber || 'Not Set'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="text-gray-500 text-xs uppercase">IFSC Code</p>
                  <p className="font-medium text-gray-900">{profile.ifscCode || 'Not Set'}</p>
                </div>
                 <div className="bg-gray-50 p-3 rounded text-sm">
                  <p className="text-gray-500 text-xs uppercase">UPI ID</p>
                  <p className="font-medium text-gray-900">{profile.upiId || 'Not Set'}</p>
                </div>
                
                {profile.qrCodeUrl && (
                  <div className="mt-4 text-center">
                    <p className="text-gray-500 text-xs uppercase mb-2">Scan to Pay</p>
                    <img src={profile.qrCodeUrl} alt="Payment QR" className="mx-auto w-32 h-32 object-contain border rounded" />
                  </div>
                )}
              </div>

              <a 
                href={generateEmailLink()}
                className="block w-full bg-secondary hover:bg-green-700 text-white text-center font-bold py-3 px-4 rounded-lg shadow transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Request via Email
              </a>
              <p className="text-xs text-center text-gray-500 mt-3">
                Clicking will open your email app with a pre-filled message.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;