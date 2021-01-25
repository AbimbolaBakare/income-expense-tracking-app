import React from 'react';
import { Col, Container, Form, Row , Button} from 'react-bootstrap'

export const NewForm = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} lg={12} >
                    <p className='text-center'>
                        ...
                    </p>
                </Col>

                <Col xs={6} lg={6} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select">
                            <option disabled>Select type</option>
                            <option value='income'>Income</option>
                            <option value='expense'>Expense</option>
                        </Form.Control>

                    </Form.Group>
                </Col>
                <Col xs={6} lg={6} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select">
                            <option disabled>Select category</option>
                            <option value='salary'>Salary</option>
                            <option value='business'>Business</option>
                            <option value='savings'>Savings</option>
                            <option value='investment'>Investment</option>
                            <option value='side-hustle'>Side hustle</option>
                            <option value='donation'>Donation</option>
                            <option value='gift'>Gift</option>
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col xs={6} lg={6} className='mt-2' >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type='text' placeholder="Enter an amount" />
                    </Form.Group>
                </Col>
                <Col xs={6} lg={6} className='mt-2'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type='date' />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" size="lg" block className='mt-2'>CREATE</Button>
        </Container>
    )
}
