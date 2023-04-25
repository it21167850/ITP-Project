import React from "react";

const Addorderitem = () => {
  return (
    <div>
      <div>
        <Card className="c-o">
          <Form>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Image</Form.Label>
                <Form.Control type="text" placeholder=" item" />
                <Form.Text className="text-muted">Enter Item</Form.Text>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Pizza" />
                <Form.Text className="text-muted">Enter Item Name</Form.Text>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Qty</Form.Label>
                <Form.Control type="number" placeholder="1" />
                <Form.Text className="text-muted">Enter quantity</Form.Text>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="example@gmail.com" />
                <Form.Text className="text-muted">Enter Price</Form.Text>
              </Form.Group>
            </Row>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Addorderitem;
