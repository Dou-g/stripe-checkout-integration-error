import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-gray-700">Thank you for your purchase. Your payment was successful.</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;