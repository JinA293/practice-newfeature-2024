"use client"

import React, { useState } from 'react';
import CodeEditor from './Editor';

interface SectionProps {
  title: string;
}

const Section = ({ title }: SectionProps) => {
  const [htmlCode, setHtmlCode] = useState<string>('<div>ここにHTMLを記述</div>');
  const [cssCode, setCssCode] = useState<string>('div { color: black; }');

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{title}</h2>
      {/* プレビューエリア */}
      <div
        style={{
          border: '1px solid #ddd',
          padding: '10px',
          marginBottom: '10px',
          minHeight: '150px',
        }}
      >
        <style>{cssCode}</style>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
      </div>
      {/* エディタ */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <CodeEditor
          language="html"
          value={htmlCode}
          onChange={(value) => setHtmlCode(value || '')}
        />
        <CodeEditor
          language="css"
          value={cssCode}
          onChange={(value) => setCssCode(value || '')}
        />
      </div>
    </div>
  );
};

export default Section;
