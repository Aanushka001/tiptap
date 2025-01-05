import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { HighlightExtension } from '../extensions/HighlightExtension';
import '../styles/editor.css';

const HighlightEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: true,
      }),
      HighlightExtension,
    ],
    content: '<p>Welcome to the Tiptap highlight editor! Select some text and use the buttons above to highlight it.</p>',
  });

  const colors = ['yellow', 'red', 'blue', 'green', 'purple', 'orange', 'pink', 'cyan'];

  const selectAll = () => {
    editor?.chain().focus().selectAll().run();
  };

  const clearAllHighlights = () => {
    editor?.chain().focus().removeHighlight().run();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="border rounded-lg shadow-sm bg-white">
        <div className="editor-toolbar p-2 border-b">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => editor?.chain().focus().setHighlight(color).run()}
              className={`w-full py-2 rounded-md text-sm ${editor?.isActive('highlight', { color }) ? 'active' : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-300'}`}
              style={{ backgroundColor: color }}
              data-highlight={color}
              title={`Highlight text in ${color}`}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-4 min-h-[300px] prose max-w-none">
          <EditorContent editor={editor} />
        </div>

        <div className="editor-buttons p-2 border-t flex gap-2">
          <button
            onClick={selectAll}
            className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            Select All
          </button>
          <button
            onClick={clearAllHighlights}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
          >
            Clear All Highlights
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighlightEditor;
