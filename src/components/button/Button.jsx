import "./Button.css";

const Button = (props) => {
  return (
    <div className="btn">
      <button value="prev" className="dec" onClick={props.say}>
        Prev
      </button>
      <button value="next" className="inc" onClick={props.say}>
        Next
      </button>
    </div>
  );
};

export default Button;
