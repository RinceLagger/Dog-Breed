import React from "react";

function Select({ onChange, options, id, name, label }) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <select name={name} id={id} onChange={onChange}>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
