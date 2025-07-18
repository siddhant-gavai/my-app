export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyles = {
    color: "green",
    fontWeight: "bold",
  };
  let styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d7c074ff",
    height: "30px",
    borderRadius: "10px",
  };
  return (
    <div className="Price" style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span> | </span>
      &nbsp;&nbsp;&nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
