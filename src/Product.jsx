import "./Product.css";
function product({ title, price, features }) {
  let isDiscounted = price > 30000;
  let styles = {
    color: "blue",
    backgroundColor: isDiscounted ? "lightgray" : null,
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div className="Product" style={styles}>
      <h2> {title} </h2>
      <h4> Price : {price} </h4>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {isDiscounted ? <p>Discounted of product 5% </p> : null}
    </div>
  );
}
export default product;
