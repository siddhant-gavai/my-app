import Product from "./Product";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "13px",
  };
  return (
    <div style={styles}>
      <Product title="Product1" idx={0} />
      <Product title="Product2" idx={1} />
      <Product title="Product3" idx={2} />
      <Product title="Product4" idx={3} />
    </div>
  );
}
export default ProductTab;
