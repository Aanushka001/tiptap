import React from 'react';
import Editor from './components/Editor';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Tiptap Highlight Editor</h1>
        <Editor />
      </div>
    </div>
  );
};

export default App;
