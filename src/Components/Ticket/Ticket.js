import React from 'react';
import './Ticket.scss';

function Ticket({products, empty, remove}) {       
    var total = products.reduce((amount, item) => (amount+parseInt(item.price)),0);        
    
    const handleEmptyTicket = () => {
        empty();
    }

    const handlePrint = () => {
        window.print();
    }

    const handleDeleteProduct = (item) => {
        remove(item);
    }
    return (
        <div className="ticket">
            <div className="ticket__information">
                <div className="cafe">
                    <h3 className="cafe__name">The Awesome Cafe</h3>
                    <p>123 Elm St</p>
                    <p>New York, NY</p>
                    <p className="cafe__number">888-888-8888</p>
                    <p className="invoice__number">Invoice #5080</p>
                </div>              
                <div className="ticket__table">
                    <table>
                        <thead>
                            <tr>
                                <th className="items__description">Description</th>
                                <th className="items__qty">Qty</th>
                                <th className="items__price">Price</th>
                                <th className="remove-icon">Remove</th>
                            </tr>
                        </thead>   
                        <tbody>            
                        {products?.map((item, index) => (                            
                            <tr key={index}>
                                <td className="items__description">{item.name}</td>
                                <td>1</td>
                                <td>{item.price}</td>
                                <td onClick={() => handleDeleteProduct(item)} className="remove-icon">❌</td>
                            </tr>                            
                        ))}                                            
                        </tbody>                     
                    </table>
                </div>

                <div className="subtotal">
                    <hr/>   
                    <div className="subtotal__price">                                                      
                        Subtotal: ${total}
                    </div>                                     
                    <hr/>                    
                </div>

            </div>
            <div className="ticket__actions">
                <button onClick={() => handlePrint()}>💳</button>            
                <button onClick={() => handleEmptyTicket()}>🗑️</button>
            </div>
        </div>
    )
}

export default Ticket
