import "./App.css";
import React from "react";

function Title() {
  return (
    <div>
      <h2>Learning React</h2>
      <button>2nd Button</button>
      <button>3rd Button</button>
    </div>
  );
}
const MultipleButtons = () => {
  return (
    <div>
      <h2>Choose an action</h2>
      <button>Like</button>
      <button>Share</button>
      <button>Comment</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Learning Day 1</h1>
      <p>This is a simple React application to get started.</p>
      <button>Submit</button>
      <Title />
      <MultipleButtons />
    </div>
  );
}

export default App;
