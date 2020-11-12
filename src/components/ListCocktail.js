import React from "react";
import { Spinner } from "react-bootstrap";
import SingleCocktail from "./SingleCocktail";

function CocktailList({ cocktails, loadCocktails }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {loadCocktails ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        cocktails.map((el) => <SingleCocktail key={el.idDrink} cocktail={el} />)
      )}
    </div>
  );
}

export default CocktailList;
