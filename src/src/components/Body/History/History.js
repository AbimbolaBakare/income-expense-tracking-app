import React from 'react'
import { ListGroup } from 'react-bootstrap';

export const History = () => {
    const history = [
        {
            text: 'My salary for january'
        },
        {
            text: 'My salary for january'
        },
        {
            text: 'My salary for january'
        },
    ];

    return (
        <ListGroup className='list text-dark'>
            {history.map((transaction, i ) =>
                <ListGroup.Item key = {i}>
                     {transaction.text}
                   
                </ListGroup.Item>
            )}

        </ListGroup>
    )
}