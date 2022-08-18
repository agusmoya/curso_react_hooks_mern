import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // console.log(inputValue);
    // onSetCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // onChange={(event) => onInputChange(event)}
        // ==
        onChange={onInputChange}
      />
    </form>
  );
};
