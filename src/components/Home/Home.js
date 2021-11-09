/* eslint-disable react-hooks/exhaustive-deps */
import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import { APP_URL, DEFAULT } from "../../Constants/constants";
import RecipeList from "../RecipeList/RecipeList";
import "./index.css";
import BG from "../../Assets/Images/bg.jpeg";

export default function Home() {
  const [recipeList, setRecipeList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState(DEFAULT.SEARCH_ITEM);

  console.log(process.env);
  const handleSearchChange = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
    setQuery(e.target.value);
  };

  // First render
  useEffect(() => {
    handleSearch();
  }, []);

  // Refreshing api
  const handleSearch = async (e) => {
    console.log(query);
    const list = await getRecipe(query);
    setRecipeList(list);
  };

  // API call
  const getRecipe = async (q) => {
    setLoader(true);
    const res = await fetch(`${APP_URL.GET_RECIPE}&q=${q}`);
    const data = await res.json();
    setLoader(false);
    return data.hits;
  };

  return (
    <div className="home-container">
      <div className="bg-img" style={{ backgroundImage: `url(${BG})` }}>
        {/* <img src={BG} alt="hero" /> */}.
      </div>
      <h1>Search for Recipes</h1>
      <div className="mb-3 input-group">
        <input
          onKeyUp={handleSearchChange}
          placeholder="Enter dish..."
          className="form-control search-recipe-input"
        />
      </div>
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={handleSearch}
      >
        Search
      </Button>
      {console.log(recipeList)}
      {!loader ? <RecipeList recipeList={recipeList} /> : <h1>Searching...</h1>}
    </div>
  );
}
