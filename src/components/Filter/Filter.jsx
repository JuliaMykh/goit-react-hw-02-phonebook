import React from "react";

export const Filter = ({ filter, changeFilter }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

// Filter.prototype = {
//   filter: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };
