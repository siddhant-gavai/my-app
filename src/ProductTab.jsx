import Product from "./Product";

function ProductTab() {
  const options1 = ["4GB RAM", "64GB Storage", "5G Support"];
  const options2 = ["8GB RAM", "512GB Storage"];
  const options3 = ["16GB RAM", "1TB Storage"];
  return (
    <div>
      <Product title="Phone" price="20200" features={options1} />
      <Product title=" Laptop" price="60099" features={options2} />
      <Product title="Macbook" price="100000" features={options3} />
    </div>
  );
}
export default ProductTab;
