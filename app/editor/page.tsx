"use client"

import React from 'react';
import Section from '../../components/Section';
import { sections } from '../../data/sectionData';


export default function EditorHome() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          htmlCodeProps={section.htmlCode}
          cssCodeProps={section.cssCode}
        />
      ))}
    </div>
  );
}