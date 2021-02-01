import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import { AppContext } from './context/context';
import { Body } from './components/Body/Body';
import TransactionInfo from './components/TransactionInfo/TransactionInfo';
import config, { db } from './service/firebase';

function Main() {
    const { addToast } = useToasts();
    const { currentUser } = useContext(AppContext);
    const [user, setUser] = useState({});

    function logout() {
        config.auth().signOut()
        addToast('Logout successful', { appearance: 'success', autoDismiss: true })
    };

    const uid = currentUser.uid

    async function getUserDocument() {
        if (!uid) return null;
        try {
            const userDocument = await db.doc(`Users/${uid}`).get();
            setUser(userDocument.data())
        } catch (error) {
            console.error("Error fetching user", error);
        }
    };

    useEffect(() => {
        getUserDocument();
    }, []);

    return (
        <Container fluid >
            <Row className=' align-items-center mt-5'>
                <Col lg='12' className='text-right '>
                    <div >
                        <Button onClick={logout} >LOGOUT</Button>
                    </div>
                </Col>

                <Col lg='6' className='text-left mt-3'>
                    <h5 className='font-weight-bolder'>Welcome, {currentUser.displayName}</h5>
                </Col>

                <Col lg='6' className='text-right mt-5'>
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