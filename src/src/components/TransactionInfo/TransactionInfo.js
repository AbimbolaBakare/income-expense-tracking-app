import React from 'react';
import { Card } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

const TransactionInfo = ({title}) => {
    return (
        <Card className={title === 'Income' ? 'income' : 'expense'}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {/* <h5> */}
                        $50 
                   {/* </h5> */}
                </Card.Text>
                {/* <Doughnut data='DATA' /> */}
            </Card.Body>
        </Card>
    )
};

export default TransactionInfo;
