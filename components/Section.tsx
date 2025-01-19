"use client"

import React, { useState } from 'react';
import CodeEditor from './Editor';
import styles from './section.module.css';

interface SectionProps {
  title: string;
  htmlCodeProps: string;
  cssCodeProps: string;
}

const Section = ({ title, htmlCodeProps, cssCodeProps }: SectionProps) => {
  const [htmlCode, setHtmlCode] = useState<string>(htmlCodeProps);
  const [cssCode, setCssCode] = useState<string>(cssCodeProps);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.sectionContainer}>
      {/* プレビューエリア */}
      <div className={styles.previewArea}>
        <style>{cssCode}</style>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
      </div>
      {/* エディタ */}
      <div className={styles.editorContainer}>
        <h1>HTML</h1>
        <CodeEditor
          language="html"
          value={htmlCode}
          onChange={(value) => setHtmlCode(value || '')} />
        <h1>CSS</h1>
        <CodeEditor
          language="css"
          value={cssCode}
          onChange={(value) => setCssCode(value || '')} />
      </div>
    </div>
    </>
  );
};

export default Section;