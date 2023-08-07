import React from "react";

const Select = (props) => {
  return (
    <select
      name="table"
      id="table"
      value={props.value}
      onChange={props.onChange}
    >
      <option value="choose Table">Choose a Table</option>
      <option value="Table 1">Table 1</option>
      <option value="Table 2">Table 2</option>
      <option value="Table 3">Table 3</option>
    </select>
  );
};

export default Select;
