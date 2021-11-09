import React, { useState } from "react";

import "./index.css";
import { Badge, ListGroup } from "react-bootstrap";
import RecipeModal from "../RecipeModal/RecipeModal";

export default function RecipeList(props) {
  const [recipeData, setRecipeData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="recipe-list-container">
      <ListGroup variant="flush">
        {props.recipeList.length > 0 ? (
          props.recipeList.map((item) => {
            return (
              <ListGroup.Item key={item?.recipe?.url}>
                <div className="recipe-item" key={item?.recipe?.uri}>
                  <span className="recipe-img">
                    <img src={item?.recipe?.image} alt="recipe" />
                  </span>
                  <div className="li-data-core">
                    <span
                      className="recipe-name hover-hand"
                      onClick={() => {
                        setRecipeData(item.recipe);
                        setModalVisible(true);
                      }}
                    >
                      <h6>
                        <b>Name: </b>
                        {item?.recipe?.label}
                        <br />
                        <span className="cal-info">
                          (Calorie count: {item?.recipe?.calories.toFixed(2)})
                        </span>
                      </h6>
                    </span>
                    <br />
                    <b>Diet Labels:</b>
                    <span className="recipe-badges">
                      {item?.recipe?.dietLabels.length > 0 ? (
                        item.recipe.dietLabels.map((label) => (
                          <Badge bg="info" className="label-badges">
                            {label}
                          </Badge>
                        ))
                      ) : (
                        <span className="label-badges">None</span>
                      )}
                    </span>
                    <div className="meal-type">
                      <b>Meal Type: </b>
                      <span class="meal-text">{item?.recipe?.mealType[0]}</span>
                    </div>
                  </div>
                  <div className="li-data-components">
                    {/* {item?.recipe?.} */}
                  </div>
                </div>
              </ListGroup.Item>
            );
          })
        ) : (
          <>
            <h1 className="no-data">No Recipes :(</h1>
            <h3 className="no-data">
              Please try searching for something else.
            </h3>
          </>
        )}
      </ListGroup>
      <RecipeModal
        show={modalVisible}
        handleClose={() => setModalVisible(false)}
        recipeData={recipeData}
      />
    </div>
  );
}
