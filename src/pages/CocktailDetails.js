import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";

import Cocktail from "../components/Cocktail";

function CocktailDetail(props) {
  const [cocktail, setCocktail] = useState({});
  const [loadCocktail, setLoadCocktail] = useState(true);
  const [Search, setSearch] = useState("margarita");
  const { id } = props.match.params;
  const getCocktailById = () => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setCocktail(res.data.drinks[0]);
        setLoadCocktail(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCocktailById();
  }, []);
  return (
    <div>
      {loadCocktail ? (
        <Spinner />
      ) : (
        <Cocktail
          cocktail={cocktail}
          loadCocktail={loadCocktail}
          Search={Search}
        />
      )}
    </div>
  );
}

export default CocktailDetail;
