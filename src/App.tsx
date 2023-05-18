import React, { useState } from 'react';
import './App.css';
import { Editor } from '@monaco-editor/react';

// New theme for monaco editor
function App() {
  const [files, setFiles] = useState([
    {
      name: 'index.js',
      language: 'javascript',
      value: 'console.log("Hello world!")'
    },
    {
      name: 'index.html',
      language: 'html',
      value: '<h1>Hello world!</h1>'
    },
    {
      name: 'index.css',
      language: 'css',
      value: 'h1 { color: red; }'
    }
  ]);

  const [activeFileIndex, setActiveFileIndex] = useState(0);

  return (
    <div className="App">
      {/* Center the editor on the screen */}
      {/* Buttons */}
      <div className="button-group">
        <button onClick={() => setActiveFileIndex(0)}
          style={
            {
              backgroundColor: activeFileIndex === 0 ? '#202020' : '#313131',
              borderBottom: activeFileIndex === 0 ? '1px solid lightblue' : 'none'
            }
          }>index.js</button>
        <button onClick={() => setActiveFileIndex(1)} style={{
          backgroundColor: activeFileIndex === 1 ? '#202020' : '#313131',
          borderBottom: activeFileIndex === 1 ? '1px solid lightblue' : 'none'
        }}>index.html</button>
        <button onClick={() => setActiveFileIndex(2)} style={{
          backgroundColor: activeFileIndex === 2 ? '#202020' : '#313131',
          borderBottom: activeFileIndex === 2 ? '1px solid lightblue' : 'none'
        }}>index.css</button>
      </div>
      <Editor
        height="92vh"
        defaultLanguage="javascript"
        defaultValue="Start coding...."
        theme="vs-dark"
        saveViewState={true}
        value={files[activeFileIndex].value}
        language={files[activeFileIndex].language}
        onChange={(value) => {
          const newFiles = [...files];
          newFiles[activeFileIndex].value = value as string;
          setFiles(newFiles);
        }}
        
      />
    </div>

  );
}

export default App;
