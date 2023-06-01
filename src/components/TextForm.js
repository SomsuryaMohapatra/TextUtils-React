import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to UPPER Case','success');
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to LOWER Case','success');
  };

  const handleCopy = () => {
    let copiedText = document.getElementById("myBox");
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
    props.showAlert('Copied','success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Removed Extra Space','success');
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="7"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h4>Text Summary</h4>
        <p>Total Words : {text.split(" ").length}</p>
        <p>Total Characters : {text.length}</p>
        <p>It will take {0.008 * text.split(" ").length} mints to read</p>
      </div>
    </>
  );
}
