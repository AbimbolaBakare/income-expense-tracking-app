import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { NewForm } from './Form/Form';
import { History } from './History/History';

export const Body = ({ title }) => {

    return (
        <Card className='main-card'>
            <Card.Body>
                <Card.Title className='text-center'>{title}</Card.Title>
                <div>
                    <h5 className='text-center mt-3'>
                        Total balance: $100
                    </h5>
                    {/* <p className='sub-text text-center'>
                        Try saying : Add income for $100 in category salary for Monday
                    </p> */}
                    <hr style={{ backgroundColor: "white" }} />
                    <NewForm />
                </div>
            </Card.Body>
            <Card.Body className='class-content'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <History />
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}
