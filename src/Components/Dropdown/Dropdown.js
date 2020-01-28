import React from "react";
import "./Dropdown.css";

const Dropdown = props => {
  //   const [Dropdownvalue, setDropdownvalue] = useState("");

  let classes = ["dropdown"];
  classes.push(props.className);

  return (
    <React.Fragment>
      <label htmlFor={props.for} className="label">
        {props.label}
      </label>
      <select
        className={classes.join(" ")}
        value={props.value}
        onChange={props.onChange}
      >
        {props.children}
      </select>
    </React.Fragment>
  );
};

export default Dropdown;
