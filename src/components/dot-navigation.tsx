"use client";
import React, { useEffect, useState } from "react";

export type Section = {
  id: string;
  label: string;
};

export type DotNavigationProps = {
  sections: Section[];
};

const DotNavigation: React.FC<DotNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section.id);
            }
          });
        },
        { threshold: 0.6 }
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sections]);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 mr-4">
      <ul className="flex flex-col space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-200 border-2 border-black ${
                activeSection === section.id ? "bg-black" : "bg-transparent"
              }`}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DotNavigation;
