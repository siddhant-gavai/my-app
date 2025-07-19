const handleFormSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted!");
};

const Form = () => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Form Component</h2>
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
