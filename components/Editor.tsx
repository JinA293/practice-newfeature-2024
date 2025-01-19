import React from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  language: 'html' | 'css';
  value: string;
  onChange: (value: string | undefined) => void;
}

const CodeEditor = ({ language, value, onChange }: CodeEditorProps) => {
  return (
    <div style={{ flex: 1, border: '1px solid #ddd', marginTop: '10px' }}>
      <Editor
        height="350px"
        width="1000px"
        language={language}
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{ fontSize: 16, minimap: { enabled: false } }}
      />
    </div>
  );
};

export default CodeEditor;
