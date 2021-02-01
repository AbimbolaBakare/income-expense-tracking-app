import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import { AppContext } from './context/context';
import { Body } from './components/Body/Body';
import TransactionInfo from './components/TransactionInfo/TransactionInfo';
import config from './service/firebase';

function Main() {
    const { addToast } = useToasts();
    const { currentUser } = useContext(AppContext);

    function logout() {
        config.auth().signOut()
        addToast('Logout successful', { appearance: 'success', autoDismiss: true })
    };

    return (
        <Container fluid >
            <Row className='align-items-center'>
                <Col lg='6' sm='6' xs='6' className='text-left mt-5 font-weight-bolder'>
                    <a href='https://github.com/AbimbolaBakare/income-expense-tracking-app'
                        target="_blank" rel="noopener noreferrer">
                        <img src='/git.png' width='50' className='img-fluid' /> Github link
                    </a>

                </Col>
                <Col lg='6' sm='6' xs='6' className='text-right '>

                    <Button onClick={logout} >LOGOUT</Button>

                </Col>

            </Row>

            <Row className=' align-items-center'>
                <Col lg='6' sm='8' xs='8' className='text-left mt-3'>
                    <h5 className='font-weight-bolder'>Welcome, {currentUser.displayName}</h5>
                </Col>

                <Col lg='6' sm='4' xs='4' className='text-right mt-5'>
                    <img src={currentUser.photoURL} alt='user' className='img-fluid' />
                </Col>

            </Row>


            <Row className='align-items-center' >
                <Col xs={12} sm={12} lg={4} className='mb-5 mt-3'>
                    <TransactionInfo title='income' />
                </Col>
                <Col xs={12} sm={12} lg={4} className='mb-5 mt-3'>
                    <Body title='INCOME-EXPENSE TRACKER' />
                </Col>
                <Col xs={12} sm={12} lg={4} className='mb-5 mt-3'>
                    <TransactionInfo title='expense' />
                </Col>
            </Row>
        </Container>
    )
};

export default Main;