const doSomething = (event) => {
  console.log("Button clicked!");
  console.log(event);
};

const handleOver = () => {
  console.log("Mouse is over the text!");
};

const Button = () => {
  return (
    <div>
      <button onClick={doSomething}>Click Me!</button>
      <p onMouseOver={handleOver}>
        This is a button component that logs a message when clicked.
      </p>
    </div>
  );
};

export default Button;
