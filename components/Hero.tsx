import React, { useRef, useEffect, useState } from 'react';

const TAGS = [
  'SOC Analyst',
  'Cybersecurity',
  'Blue Team',
  'SIEM',
  'Networking',
  'Linux',
  'Incident Response',
];

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex flex-col justify-center items-center text-center py-16 sm:py-20 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <img
        src="/images/prof photo.jpeg"
        alt="Ahmed Rashmi"
        className="w-32 h-32 rounded-full mb-4 sm:mb-6 object-cover"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-gray-900 mb-3">
        Ahmed Rashmi
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600">
        Cybersecurity & SOC Analyst
      </p>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">
        Blue Team • Threat Detection • Incident Response
      </p>
      <p className="text-sm text-gray-500 mb-6 sm:mb-8">
        B.Tech Information Technology • India
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10 max-w-2xl">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href="https://cyberguard-portfolio-qesld29.public.builtwithrocket.new"
        className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;