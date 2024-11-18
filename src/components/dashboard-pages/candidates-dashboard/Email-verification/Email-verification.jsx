import React, { useState } from 'react';
import { Mail, ChevronRight } from 'lucide-react';

const EmailVerification = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email verification logic here
    console.log('Verifying email:', email);
  };

  return (
    <div className="flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-medium text-cyan-500 mb-4">
            Get verified today
          </h1>
          <p className="text-gray-500">
            Increase your profile's trustworthiness by verifying your email address.
          </p>
        </div>

        {/* Email Input Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="relative">
            <div className="border border-gray-200 rounded-lg flex items-center p-3 hover:border-gray-300 transition-colors">
              <Mail className="h-6 w-6 text-cyan-500 flex-shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 ml-3 text-gray-600 placeholder-gray-400 focus:outline-none"
                required
              />
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Continue Link */}
          <div className="text-center">
            <button
              type="submit"
              className="text-cyan-500 hover:text-cyan-600 transition-colors text-sm"
            >
              I'm done, please continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;