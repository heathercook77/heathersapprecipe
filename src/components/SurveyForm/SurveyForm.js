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
          <Form.Label>
            Email address<span className="required-ast">*</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" required>
          <Form.Label>
            Password<span className="required-ast">*</span>
          </Form.Label>
          <Form.Control type="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>What would you like to see on this site? (Optional)</Form.Label>
          <Form.Control
            type="input"
            placeholder="What is your Favorite movie?"
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
