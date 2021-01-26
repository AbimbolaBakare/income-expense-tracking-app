import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { db } from '../../../service/firebase';
import {AppContext} from '../../../context/context'

export const NewForm = () => {
    const { currentUser } = useContext(AppContext)
    const [form, setForm] = useState({
        category: '',
        type: '',
        amount: '',
        date: '',
        id: Math.floor(Math.random() * 9000000000)
    });

   // console.log(form)

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    }

    function submit() {
        db.doc(`Users/${currentUser.uid}`).collection('transactions').add(form);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} lg={12} >
                    {/* <p className='text-center'>
                        ...
                    </p> */}
                </Col>

                <Col xs={6} lg={6} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" onChange={handleChange} name='type'>
                            <option disabled>Select type</option>
                            <option value='income'>Income</option>
                            <option value='expense'>Expense</option>
                        </Form.Control>

                    </Form.Group>
                </Col>
                <Col xs={6} lg={6} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" onChange={handleChange} name='category'>
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
                        <Form.Control type='text' placeholder="Enter an amount" value={form.amount} name='amount' onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col xs={6} lg={6} className='mt-2'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type='date' name='date' value={form.date} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" size="lg" block className='mt-2' onClick={submit}>CREATE</Button>
        </Container>
    )
}
