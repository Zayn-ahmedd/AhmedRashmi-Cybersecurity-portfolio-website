import React, { useRef, useEffect, useState } from 'react';

const Statement: React.FC = () => {
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
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-6 sm:mb-8 max-w-4xl mx-auto">
        Securing Systems Through Insight, Analysis, and Action.
      </h2>
      <div className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed space-y-6">
        <p>
          I am Ahmed Rashmi, a cybersecurity enthusiast and aspiring SOC Analyst with a strong focus on blue-team operations. I specialize in monitoring security events, analyzing logs, triaging alerts, and understanding attacker behavior. My work revolves around transforming security data into meaningful insights that help strengthen defenses and improve incident response.
        </p>
        <p>
          I believe in clarity, discipline, and continuous learning. Beyond my technical focus, I enjoy documenting security processes and simplifying complex concepts for beginners, helping others enter the cybersecurity space with confidence.
        </p>
      </div>
    </section>
  );
};

export default Statement;