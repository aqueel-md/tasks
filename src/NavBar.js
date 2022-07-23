import "./NavBar.css";

const NavBar = ({ menu, setFilter, setMenuData }) => {
  const uniqueCategory = [
    ...new Set(
      menu.map((value) => {
        return value.category;
      })
    ),
  ];

  return (
    <nav>
      <button onClick={() => setMenuData(menu)}>All</button>
      {uniqueCategory.map((value, index) => {
        return (
          <button key={index} onClick={() => setFilter({ value })}>
            {value}
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;
