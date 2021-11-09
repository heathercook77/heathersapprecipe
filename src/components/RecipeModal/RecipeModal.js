import React from "react";
import { Card, CloseButton, Modal } from "react-bootstrap";
import "./index.css";

export default function RecipeModal(props) {
  return (
    <>
      {props.show && (
        <Modal show={true} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={props.recipeData.image}
                className="recipe-img-info"
              />
              <Card.Body>
                <Card.Title>{props.recipeData.label}</Card.Title>
                <h6 className="ing-heading">Ingredients-</h6>
                <ul className="ingredients-list">
                  {props.recipeData.ingredients.map((ing, i) => (
                    <li className="ing-li" key={i}>
                      {ing.text}
                      <img src={ing.image} alt="ing" className="ing-img" />
                    </li>
                  ))}
                </ul>
                <Card.Text>
                  Recipe is taken from {props.recipeData.source}.<br />
                  You may find the complete recipe at the following link:
                  <br />
                  <a
                    href={props.recipeData.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-to-source"
                  >
                    {props.recipeData.source}
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <CloseButton
              className="close-modal-lower-btn"
              variant="secondary"
              onClick={props.handleClose}
            >
              Close
            </CloseButton>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
