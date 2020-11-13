import React from "react";

import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardImg,
  Spinner,
} from "reactstrap";

const Cocktail = ({ cocktail, loadCocktail }) => {
  return (
    <div className="text-muted">
      {loadCocktail ? (
        <Spinner />
      ) : (
        <Card>
          <CardImg
            top
            width="20px"
            src={cocktail.strDrinkThumb}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h6">{cocktail.strDrink}</CardTitle>

            <CardText>
              <small className="text-muted">
                Ingredient:{cocktail.strIngredient1}
              </small>
            </CardText>
            <CardText>
              <small className="text-muted">
                Ingredient:{cocktail.strIngredient2}
              </small>
            </CardText>
            <CardText>
              <small className="text-muted">
                Ingredient:{cocktail.strIngredient3}
              </small>
            </CardText>

            <CardText>
              <small className="text-muted">
                Instructions:{cocktail.strInstructions}
              </small>
            </CardText>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default Cocktail;
