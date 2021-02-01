import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { AppContext } from '../../context/context';
import { expenseColors, incomeColors } from './colors';

const TransactionInfo = ({ title }) => {

    const { document } = useContext(AppContext);

    const colorCategories = title === 'income' ? incomeColors : expenseColors;

    const rightTransactions = Object.keys(document).length !== 0 ? document.filter((t) => t.type === title) : [];

    const data = {
        datasets: [{
            
            data: rightTransactions.map((c) => c.amount),
           backgroundColor: colorCategories,
          }],
          labels: rightTransactions.map((c) => c.category),
          scaleFontColor: "#FFFFFF"

    };

    const total = rightTransactions.reduce((sum, item) => sum + Number(item.amount), 0)
  

    return (
        <Card className={title === 'income' ? 'income' : 'expense'}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='text-dark text-center font-weight-bolder'>
                     NGN {Number(total).toLocaleString()}
                </Card.Text>
                {Object.keys(document).length !== 0 &&
                    <Doughnut data={data} 
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        legend :  {
                            labels : {
                                fontColor: "black",
                                fontSize: 16,
                            }
                        }
                      }}
                    />
                }

            </Card.Body>
        </Card>
    )
};

export default TransactionInfo;
