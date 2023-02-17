const Box = (props) => {
  const { className, text } = props;
  return <p className={`${className}`}>{text}</p>;
};

const element = (
  <div className="bg-container">
    <h1 className="head">Boxes</h1>
    <div className="sub-container">
      <div className="s-box">
        <Box className="small-box" text="small" />
      </div>
      <div className="m-box">
        <Box className="medium-box" text="Medium" />
      </div>
      <div className="l-box">
        <Box className="large-box" text="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
