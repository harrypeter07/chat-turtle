"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    // Hero animations
    gsap.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-image", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Features animations
    gsap.utils.toArray(".feature-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
      });
    });

    // Pricing animations
    gsap.utils.toArray(".pricing-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
      });
    });

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-40 relative overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="ml-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={textRef} className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 leading-tight">
                Welcome to Chat-Turtle
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your friendly neighborhood for seamless conversations.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500/10 transform transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-image relative h-[500px] flex justify-center">
              <Image src="/images/turtle.png" alt="Chat Illustration" width={500} height={500} className="object-contain"  priority/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
     
      <section ref={featuresRef} className="py-20 relative">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 text-white">
      Why Choose <span className="text-blue-400">Chat-Turtle</span>?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Fast and Reliable",
          description: "Experience lightning-fast messaging with minimal latency, ensuring smooth conversations anytime, anywhere.",
          icon: "⚡",
        },
        {
          title: "Secure and Private",
          description: "End-to-end encryption and robust security measures keep your conversations safe from prying eyes.",
          icon: "🔒",
        },
        {
          title: "User-Friendly",
          description: "A sleek and intuitive interface designed for effortless navigation and seamless interaction.",
          icon: "🎨",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="feature-card p-8 bg-gradient-to-br from-gray-800 to-gray-900 
          rounded-2xl shadow-xl border-2 border-white hover:transform hover:scale-105 
          transition-all duration-300"
        >
          <div className="text-4xl text-blue-400 mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

     
     
     
     
     
     
     
     
     
     
     
     
     

      {/* Pricing Section */}
    
      <section ref={pricingRef} className="py-20 relative">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 text-white">
      Choose Your <span className="text-blue-400">Plan</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Free Plan",
          price: "$0/month",
          features: ["Basic messaging", "Limited storage", "Community support"],
        },
        {
          name: "Pro Plan",
          price: "$9.99/month",
          features: ["Unlimited messaging", "100GB storage", "Priority support"],
        },
        {
          name: "Enterprise Plan",
          price: "Custom Pricing",
          features: ["Advanced security", "Dedicated server", "24/7 support"],
        },
      ].map((plan, index) => (
        <div
          key={index}
          className="pricing-card p-8 bg-gradient-to-br from-gray-800 to-gray-900 
          rounded-2xl shadow-xl border-2 border-white hover:transform hover:scale-105 
          transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
          <p className="text-blue-400 text-xl font-semibold">{plan.price}</p>
          <ul className="mt-4 text-gray-300 space-y-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-400">✔</span> {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full transition duration-300">
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

    
    
    
    
    
    
    
    
    
    
    
    
    

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Chat-Turtle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
