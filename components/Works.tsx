import React, { useRef, useEffect, useState } from 'react';
import type { Project } from '../types';

interface WorksProps {
  projects: Project[];
}

interface ProjectItemProps {
  project: Project;
  layout: 'left' | 'right';
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, layout }) => {
  const isImageLeft = layout === 'left';
  const flexDirection = isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse';

  return (
    <div className={`group flex flex-col ${flexDirection} items-center gap-6 md:gap-8 lg:gap-12`}>
      <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out group-hover:shadow-xl">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-3 sm:mb-4">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const Works: React.FC<WorksProps> = ({ projects }) => {
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
      id="works"
      ref={sectionRef}
      className={`py-16 sm:py-20 md:py-28 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-gray-900 text-center mb-10 sm:mb-12 md:mb-20">
        Selected Security Work
      </h2>
      <div className="space-y-12 sm:space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            layout={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;