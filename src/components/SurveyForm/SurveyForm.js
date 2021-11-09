import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";

export default function SurveyForm() {
  const handleSave = (e) => {
    // e.preventDefault();
    console.log("Save");
  };

  return (
    <div className="home-container">
      <h1>Survey Form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>What is your preferred cuisine?</Form.Label>
          <Form.Control
            type="input"
            placeholder="Please enter your preferred cuisine..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSave}>
          Save Data
        </Button>
      </Form>
    </div>
  );
}
