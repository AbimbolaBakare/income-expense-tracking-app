import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row, Button, Spinner } from 'react-bootstrap'
import { db } from '../../../service/firebase';
import { AppContext } from '../../../context/context';
import { useToasts } from 'react-toast-notifications';

export const NewForm = () => {
    const { addToast } = useToasts();
    const { currentUser } = useContext(AppContext);
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        category: 'salary',
        type: 'income',
        amount: '',
        date: '',
        id: Math.floor(Math.random() * 90000000000)
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    }

    async function submit() {
        if (form.category && form.type && form.amount && form.date) {
            setLoading(true)
            await db.doc(`Users/${currentUser.uid}`).collection('transactions').add(form).then(() => {
                setLoading(false)
                addToast('Transaction saved successfully, Please refresh', { appearance: 'success', autoDismiss: true })
            })
        } else {
            addToast('Please fill all fields', { appearance: 'error', autoDismiss: true })
        }
    }

    console.log(form)



    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} lg={6} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" onChange={handleChange} name='type' value={form.type}>
                            <option disabled>Select type</option>
                            <option value='income'>Income</option>
                            <option value='expense'>Expense</option>
                        </Form.Control>

                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} lg={6} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" onChange={handleChange} name='category' value={form.category}>
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

                <Col xs={12} sm={12} lg={6} className='mt-2' >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type='text' placeholder="Enter an amount" value={form.amount} name='amount' onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={12} lg={6} className='mt-2'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type='date' name='date' value={form.date} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" size="lg" block className='mt-2' onClick={submit}>
                {loading ? <Spinner animation="border" /> : 'CREATE'}
            </Button>


        </Container>
    )
}
