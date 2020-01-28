import React from "react";

const DropdownItem = props => {
  return (
    <option value={props.value}>
      {props.chapter} {props.content}
    </option>
  );
};

export default DropdownItem;
