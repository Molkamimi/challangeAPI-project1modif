import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import CocktailDetails from "./pages/CocktailDetails";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Axios from "axios";
import Cocktails from "./components/Cocktail";

import { Route, Switch } from "react-router-dom";
function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loadCocktails, setLoadCocktails] = useState(true);
  const [Search, setSearch] = useState("margarita");
  const getCocktail = () => {
    Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Search}`
    )

      .then((res) => {
        setCocktails(res.data.drinks);
        setLoadCocktails(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCocktail();
  }, [Search]);

  return (
    <div className="App">
      <NavBar setSearch={setSearch} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home cocktails={cocktails} loadCocktails={loadCocktails} />
          )}
        />
        <Route path="/aboutus" component={AboutUs} />
        <Route
          path="/cocktails/:id"
          render={(props) => (
            <CocktailDetails {...props} Cocktails={Cocktails} />
          )}
        />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
