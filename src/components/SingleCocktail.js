import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const SingleCocktail = ({ cocktail }) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="20%"
          src={cocktail.strDrinkThumb}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{cocktail.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {cocktail.strDrink}
          </CardSubtitle>{" "}
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {cocktail.strCategory}
          </CardSubtitle>
          <Link to={`/cocktails/${cocktail.idDrink}`}>
            <Button>More Details</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleCocktail;
