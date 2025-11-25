import React from 'react';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Project } from './types';

const App: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Home SOC Lab & Log Monitoring',
      description: 'A practical home-lab environment featuring Windows and Linux systems forwarding logs to a SIEM platform. Focused on alert generation, event correlation, and basic incident response workflows.',
      imageUrl: 'https://picsum.photos/seed/cyber1/800/600',
    },
    {
      id: 2,
      title: 'Nmap & Network Enumeration Playbook',
      description: 'A structured approach to network scanning and surface mapping using Nmap. Includes scan methodology, result interpretation, and documentation for security assessments.',
      imageUrl: 'https://picsum.photos/seed/cyber2/800/600',
    },
    {
      id: 3,
      title: 'HTTP Traffic Analysis with Wireshark',
      description: 'Captured and analyzed network traffic to identify patterns, anomalies, and potential security issues. Focused on improving detection and understanding attacker techniques.',
      imageUrl: 'https://picsum.photos/seed/cyber3/800/600',
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Statement />
        <Works projects={projects} />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;