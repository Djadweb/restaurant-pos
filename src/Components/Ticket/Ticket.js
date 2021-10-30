import React from 'react';
import './Ticket.scss';

function Ticket() {
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
                        <tr>
                            <th className="items__description">Description</th>
                            <th className="items__qty">Qty</th>
                            <th className="items__price">Price</th>
                            <th className="items__subDel">Sub Del</th>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="ticket__actions"></div>
        </div>
    )
}

export default Ticket
