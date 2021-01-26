import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap';
import { AppContext } from '../../../context/context';

export const History = () => {

    const { document } = useContext(AppContext);
    return (
        <>
            { Object.keys(document).length !== 0 &&
                <ListGroup className='list text-dark'>
                    {document.map((transaction, i) =>
                        <ListGroup.Item key={i}>
                            <p className='font-weight-bolder m-0 text-uppercase'>{transaction.category}</p><br/>
                            <span>&#8358;</span>
                            {transaction.amount} - {transaction.date}

                        </ListGroup.Item>
                    )}

                </ListGroup>
            }
        </>

    )
}