"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';


const topics = [
  { text: "Python", img: "/images/python.png", desc: "Learn the versatile and powerful Python programming language." , slug: "Pythonn"},
  { text: "JavaScript", img: "/images/javascript.png", desc: "Master the core of web development with JavaScript." , slug: "JavaScriptt"},
  { text: "React", img: "/images/react.png", desc: "Build dynamic and interactive user interfaces with React.", slug:"Reactt" },
  { text: "Node.js", img: "/images/nodejs.png", desc: "Develop server-side applications with Node.js." , slug: "nodejss"},
  { text: "Data Science", img: "/images/data_science.png", desc: "Explore the world of data analysis and machine learning.", slug: "Data-Sciencee"},
  { text: "Artificial Intelligence", img: "/images/ai.png", desc: "Delve into the exciting field of artificial intelligence." , slug: "Aii"},
];


const Forums = () => {
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure all cards are visible initially
    gsap.set(cardsRef.current, { opacity: 0, y: 100 });
    
    // Create a timeline for better control
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out"
      }
    });

    // Animate header
    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1
    });

    // Animate cards with stagger effect
    tl.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: {
        each: 0.2,
        from: "start"
      }
    }, "-=0.5"); // Overlap with header animation

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  const handleButtonHover = (e, isEnter) => {
    gsap.to(e.target, {
      scale: isEnter ? 1.1 : 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-6">
      <div className="container mx-auto" ref={containerRef}>
        <h1 
          ref={headerRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12  relative text-teal-600"
        >
          <span className="relative text-6xl text-teal-600">
            Discussion Forums
            
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-56 bg-gray-600">
              <Image
               src={topic.img}
                alt={topic.text}
                className='object-contain h-full w-full'
                width={500}
                height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                  {topic.text}
                </h3>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {topic.desc}
                </p>
                
                <Link href={`/forum/${topic.slug}`}>
                           <button 
                            className="group relative inline-flex items-center justify-center px-8 py-3 w-full overflow-hidden font-medium tracking-wider text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-out"
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                               >
-new                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                           <span className="relative">Read Moreee</span>
                           </button>

                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;