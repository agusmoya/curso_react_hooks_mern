import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiffExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    let flag = false;
    // console.log("Agrego Categoría nueva: ", newCategory);
    categories.map((cat) => {
      flag = false;
      console.log(cat);
      if (cat.toLowerCase().includes(newCategory.toLowerCase())) {
        flag = true;
      }
    });
    if (flag) {
      console.error("Ya ha ingresado ese valor");
      return;
    }

    setCategories([...categories, newCategory]);
    // ==
    // setCategories((cat) => [...cat, newCategory]);
  };

  return (
    <>
      <h1>Giff Expert App</h1>
      <AddCategory
        // onSetCategories={setCategories}
        // *Cuando llevan el on, significa que emite algo*
        // onNewCategory={event => onAddCategory(event)}
        // ==
        // onNewCategory={onAddCategory}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* <button onClick={onAddCategory}>Agregar Categoría</button> */}
      {categories.map((category) => (
        // <li key={category}>{category}</li>
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GiffExpertApp;
