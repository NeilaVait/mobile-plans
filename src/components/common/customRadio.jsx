const CustomRadio = (props) => {
  return (
    <div onClick={props.onRadio} className="radio-container">
      {props.checked === true ? <strong>Selected</strong> : <strong>Not selected</strong>}
      <span>{props.children}</span>
    </div>
  );
};

export default CustomRadio;
