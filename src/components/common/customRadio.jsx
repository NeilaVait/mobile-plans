const CustomRadio = (props) => {
  return (
    <div onClick={() => props.handleRadio(props.value)} className="radio-container">
      <svg height="25" width="25">
        <circle
          cx="12"
          cy="12"
          r="11"
          stroke={props.checked === true ? 'blue' : 'grey'}
          strokeWidth="1"
          fill={props.checked === true ? '#900ae3' : 'white'}
        />
        <circle cx="12" cy="12" r="4" fill="white" />
      </svg>

      <span>{props.children}</span>
    </div>
  );
};

export default CustomRadio;
