import React from "react";

import SingleCocktail from "./SingleCocktail";
import LinearProgress from "@material-ui/core/LinearProgress";
import Erros from "../pages/Error";
function ListCocktail({ cocktails, loadCocktails }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingTop: "10%",
        marginLeft: "25%",
        width: "40%",
      }}
    >
      {loadCocktails ? (
        <LinearProgress />
      ) : cocktails == null ? (
        <h1 style={{ textAlign: "center" }}>
          No Cocktails Matched Your Search Criteria
        </h1>
      ) : (
        cocktails.map((el) => <SingleCocktail key={el.idDrink} cocktail={el} />)
      )}
    </div>
  );
}

export default ListCocktail;
