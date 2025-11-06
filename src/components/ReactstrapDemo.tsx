import React from "react";
import { Button, Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ReactstrapDemo() {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Alert color="primary">Reactstrap Alert Example</Alert>
      <Button color="success">Reactstrap Button</Button>
    </div>
  );
}
