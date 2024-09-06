import { TextIgniter } from "@mindfiredigital/react-text-igniter";
import React, { useRef } from "react";
import "./App.css";
export default function App() {
  const editorRef = useRef();

  // define features
  const features = [
    "heading",
    "bold",
    "italic",
    "underline",
    "orderedList",
    "unorderedList",
    "justifyLeft",
    "justifyCenter",
    "justifyRight",
    "createLink",
    "insertImage",
    "superscript",
    "subscript",
    "table",
    "layout",
  ];

  // get HTML content
  const handleGetHtmlContent = () => {
    console.log("HTML:", editorRef.current.getHtml());
  };

  // get JSON content
  const handleGetJsonContent = () => {
    console.log("JSON:", editorRef.current.getJson());
  };

  return (
    <div className="main-container">
      <TextIgniter ref={editorRef} features={features} height={"200px"} />
      <div className="content-div">
        <p>Get Content ( check browser console)</p>
        <button className="html-btn" onClick={handleGetHtmlContent}>
          check html
        </button>
        <button className="json-btn" onClick={handleGetJsonContent}>
          check Json
        </button>
      </div>
    </div>
  );
}
