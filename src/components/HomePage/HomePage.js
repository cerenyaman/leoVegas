import React, { useEffect, useState } from "react";
//pages
import axios from "axios";
//components
import ProductCard from "../ProductCard/ProductCard";
import SearchPage from "../SearchPage/SearchPage";
import DropDownPage from "../DropdownPage/DropDownPage";
//utils
import { unique } from "../../utils/arrayFunctions";
//images for png
import Vegas from "../../images/vegas.png";
//style
import "./style.css";
const HomePage = () => {
  const url = "https://www.mocky.io/v2/5da99f9f31000036004e0a4e";
  //UseState-Hook
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
      let categoriyList = [];
      response.data.map((item) => {
        categoriyList.push(...item.categories);
      });
      categoriyList = categoriyList.filter(unique);
      categoriyList.sort();
      setCategories(categoriyList);
    });
  }, [url]);

  const getProducts = () => {
    return products.filter(
      (item) =>
        (item.categories.includes(selectedCategory) ||
          selectedCategory === "all") &&
        item.gameName
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
    );
  };

  return (
    <div className="container-leovegas">
      <img src={Vegas} alt="" style={{ width: "75px", height: "75px" }} />
      <div className="header">
        <DropDownPage
          changeHandler={(e) => setSelectedCategory(e.target.value)}
          categorieList={categories}
        />
        <SearchPage onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div className="cards">
        {getProducts().map((product) => (
          <div className="card " key={product.gameName}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
