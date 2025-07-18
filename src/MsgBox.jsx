const MsgBox = ({ userName, textColor }) => {
  let styles = {
    color: textColor || "black",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "lightyellow",
  };
  return <h1 style={styles}>Hello {userName}, Welcome!! </h1>;
};

export default MsgBox;
