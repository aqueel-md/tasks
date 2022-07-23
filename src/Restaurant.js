import { useState } from "react";
import Menu from "./menuData";
import Card from "./Card";
import NavBar from "./NavBar";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const setFilter = (category) => {
    const updatedList = Menu.filter((value) => {
      return value.category === category.value;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <NavBar menu={Menu} setFilter={setFilter} setMenuData={setMenuData} />
      <Card menuData={menuData} />
    </>
  );
};

export default Restaurant;