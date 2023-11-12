import React from "react";

import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextEditor({ value, onChange }: TextEditorProps) {
  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={(e) => onChange(e)} />
    </div>
  );
}
