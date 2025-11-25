import React, { useRef, useEffect, useState } from 'react';

const Contact: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-20 md:py-28 text-center transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-4 sm:mb-6">
        Let’s Work Together.
      </h2>
      <a
        href="mailto:ahmedrashmicareer@gmail.com"
        className="text-lg sm:text-xl md:text-2xl text-gray-600 hover:text-gray-900 underline transition-colors duration-300 ease-in-out"
      >
        ahmedrashmicareer@gmail.com
      </a>
    </section>
  );
};

export default Contact;