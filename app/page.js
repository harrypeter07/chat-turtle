import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="bg-gray-700 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}> 
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Chat-Turtle</h1>
            <p className="text-lg mb-6">
              Your friendly neighborhood for seamless conversations.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-600">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Chat-Turtle?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-teal-600 rounded-lg shadow-md">
              <svg className="w-10 h-10 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2h-5m0-4h5a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v6h10z"></path></svg>
              <h3 className="text-xl font-semibold mb-2">Fast and Reliable</h3>
              <p>Experience lightning-fast message delivery and enjoy uninterrupted conversations.</p>
            </div>
            <div className="p-6 bg-teal-600 rounded-lg shadow-md">
              <svg className="w-10 h-10 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8v10c0 2.21-2 4-4 4H7a4 4 0 01-4-4V8c0-1.105.895-2 2-2h10c1.105 0 2 .895 2 2zm-3 4c0 .663-.537 1.2-1.2 1.2H4c-.663 0-1.2-.537-1.2-1.2V14c0-.663.537-1.2 1.2-1.2h7c.663 0 1.2.537 1.2 1.2z"></path></svg>
              <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
              <p>Your conversations are protected with end-to-end encryption, ensuring your privacy.</p>
            </div>
            <div className="p-6 bg-teal-600 rounded-lg shadow-md">
              <svg className="w-10 h-10 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2 .89-2 2-2z"></path></svg>
              <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
              <p>Enjoy a simple and intuitive interface designed for a seamless chatting experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-600 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
              <p className="text-lg font-semibold">£0/month</p>
              <ul className="list-disc ml-4">
                <li>Unlimited Messages</li>
                <li>Group Chats</li>
                <li>Basic File Sharing</li>
                <li>Limited Features</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Start Free
              </button>
            </div>
            <div className="p-6 bg-gray-600 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
              <p className="text-lg font-semibold">£5/month</p>
              <ul className="list-disc ml-4">
                <li>Unlimited Messages</li>
                <li>Group Chats</li>
                <li>Enhanced File Sharing</li>
                <li>Priority Support</li>
                <li>All Free Plan Features</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Choose Pro
              </button>
            </div>
            <div className="p-6 bg-gray-500 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
              <p className="text-lg font-semibold">Contact Us</p>
              <ul className="list-disc ml-4">
                <li>Customizable Features</li>
                <li>Dedicated Support</li>
                <li>Advanced Security</li>
                <li>All Pro Plan Features</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Chat-Turtle Community</h2>
          <p>Connect with friends, family, and colleagues effortlessly.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
            Download Now
          </button>
        </div>
      </section>

      {/* Footer (Optional) */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Chat-Turtle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
export const metadata = {
  title: 'chat-turtle',
  description: '...',
}
 