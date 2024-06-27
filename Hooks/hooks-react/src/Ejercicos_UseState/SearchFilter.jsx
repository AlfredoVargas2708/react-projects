import { useState } from "react";

const SearchFilter = () => {
  const items = [
    "Apple",
    "Banana",
    "Carrot",
    "Date",
    "Eggplant",
    "Fig",
    "Grape",
  ];

  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredItems);
  return (
    <div>
      <input type="text" value={search} onChange={handleInputChange} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
