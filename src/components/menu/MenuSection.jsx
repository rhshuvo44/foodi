import React, { useEffect, useState } from "react";
import Cards from "../Cards";

const MenuSection = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const [seletedCategory, setSeletedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  //load data
  useEffect(() => {
    //fetch data from backend
    const fetchData = async () => {
      try {
        const res = await fetch("/menu.json");
        const data = await res.json();
        setMenu(data);
        setFilteredItem(data);
      } catch (error) {
        console.log(`Error fetching data`, error);
      }
    };
    fetchData();
  }, []);
  //filtering data based on category
  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItem(filtered);
    setSeletedCategory(category);
  };
  const showAll = () => {
    setFilteredItem(menu);
    setSeletedCategory("all");
  };
  //sorting based on A-Z ,Z-A , Low-High pricing

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortItems = [...filteredItem];

    //logic
    switch (option) {
      case "A-Z":
        sortItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortItems.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    setFilteredItem(sortItems);
  };

  return (
    <section className="section-container">
      <div className="2">filter btn</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItem.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
