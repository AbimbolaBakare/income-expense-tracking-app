import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import { Body } from './components/Body/Body';
import TransactionInfo from './components/TransactionInfo/TransactionInfo';
import config from './service/firebase';

function Main() {
    const {addToast} = useToasts();

    function logout() {
        config.auth().signOut()
        addToast('Logout successful', { appearance: 'success', autoDismiss: true })
    }
    return (
        <Container fluid >
            <div className='text-right mt-4'>
                <Button onClick={logout} >LOGOUT</Button>
            </div>

            <Row className='align-items-center' >
                <Col xs={12} sm={12} lg={4} className='mt-2'>
                    <TransactionInfo title='Income' />
                </Col>
                <Col xs={12} sm={12} lg={4} className='mt-2'>
                    <Body title='EXPENSE TRACKER' />
                </Col>
                <Col xs={12} sm={12} lg={4} className='mt-2'>
                    <TransactionInfo title='Expenses' />
                </Col>
            </Row>
        </Container>
    )
};

export default Main;