import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function SplyReqForm() {
  return (
    <Form>
       
      <Form.Group className="mb-3" controlId="formBasicid">
        <Form.Label>Product ID</Form.Label>
        <Form.Control type="Product ID" placeholder="Enter product ID" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPname">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="Product Name" placeholder="Product Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPQuanty">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control type="Product Quantity" placeholder="Product Quantity" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SplyReqForm;