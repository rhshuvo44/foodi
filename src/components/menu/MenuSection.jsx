import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import { FaFilter } from "react-icons/fa";

const MenuSection = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const [seletedCategory, setSeletedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(6);
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
    setCurrentPage(1);
  };
  const showAll = () => {
    setFilteredItem(menu);
    setSeletedCategory("all");
    setCurrentPage(1);
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
    setCurrentPage(1);
  };

  //pagination logic

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = filteredItem.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="section-container">
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between space-y-3 items-center">
        <div className="flex flex-row justify-start md:items-center md:gap-8 flex-wrap">
          <button
            onClick={showAll}
            className={seletedCategory === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            className={seletedCategory === "salad" ? "active" : ""}
            onClick={() => filterItem("salad")}
          >
            Salad
          </button>
          <button
            className={seletedCategory === "pizza" ? "active" : ""}
            onClick={() => filterItem("pizza")}
          >
            Pizza
          </button>
          <button
            className={seletedCategory === "soup" ? "active" : ""}
            onClick={() => filterItem("soup")}
          >
            Soups
          </button>
          <button
            className={seletedCategory === "dessert" ? "active" : ""}
            onClick={() => filterItem("dessert")}
          >
            Desserts
          </button>
          <button
            className={seletedCategory === "drinks" ? "active" : ""}
            onClick={() => filterItem("drinks")}
          >
            Drinks
          </button>
        </div>
        <div className="flex justify-center items-center bg-black">
          <div className="p-2">
            <FaFilter className="h-4 w-4 text-white" />
          </div>
          <select
            name="sort"
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className="bg-black text-white px-2 py-1 rounded-sm"
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 my-12">
        {currentItem.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
      {/* pagination  */}
      <div className="flex justify-center items-center mb-6">
        {Array.from({
          length: Math.ceil(filteredItem.length / itemPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-accent text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
