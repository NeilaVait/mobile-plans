const CustomRadio = (props) => {
  return (
    <div onClick={() => props.handleRadio(props.value)} className="radio-container">
      {props.checked === true ? (
        <svg height="25" width="25">
          <circle cx="12" cy="12" r="11" stroke="blue" stroke-width="1" fill="#900ae3" />
          <circle cx="12" cy="12" r="4" fill="white" />
        </svg>
      ) : (
        <svg height="25" width="25">
          <circle cx="12" cy="12" r="11" stroke="blue" stroke-width="1" fill="white" />
        </svg>
      )}
      <span>{props.children}</span>
    </div>
  );
};

export default CustomRadio;
