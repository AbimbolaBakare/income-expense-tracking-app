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
            <Row className=' align-items-center'>
                <Col lg='6' className='text-left'>
                    <img src={currentUser.photoURL} alt='user' />
                </Col>
                <Col lg='6' className='text-right '>
                    <div >
                        <Button onClick={logout} >LOGOUT</Button>
                    </div>
                </Col>
            </Row>


            <Row className='align-items-center' >
                <Col xs={12} sm={12} lg={4} className=''>
                    <TransactionInfo title='Income' />
                </Col>
                <Col xs={12} sm={12} lg={4} className=''>
                    <Body title='EXPENSE TRACKER'  />
                </Col>
                <Col xs={12} sm={12} lg={4} className=''>
                    <TransactionInfo title='Expenses' />
                </Col>
            </Row>
        </Container>
    )
};

export default Main;