import "./Product.css";
import Price from "./Price";

function Product({ title = "Apple Mouse", idx }) {
  let oldPrice = ["1212", "2545", "1234", "2345"];
  let newPrice = ["1000", "2000", "1500", "1800"];
  let Description = [
    ["This is a great product", "It has amazing features"],
    ["This is an amazing product", "It is very useful"],
    ["This is a fantastic product", "It has great quality"],
    ["This is a superb product", "It is very affordable"],
  ];
  return (
    <div className="Product">
      <h1> {title} </h1>
      <p> {Description[idx][0]} </p>
      <p> {Description[idx][1]} </p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}
export default Product;
