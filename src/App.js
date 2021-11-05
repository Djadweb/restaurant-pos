import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Ticket from './Components/Ticket/Ticket';
import './App.scss';
import { useState } from 'react';

function App() {
  const [ticketItems, setTicketItems] = useState([]);

  const emptyTicket = () => {    
    setTicketItems([]);
  }

  const addItems = (product) => {        
    setTicketItems(      
      [...ticketItems, product]
    );        
  }  

  const removeProduct = (item) => {            
    let newArray = ticketItems;    
    newArray.splice(newArray.findIndex(a => a.name === item.name), 1);    
    setTicketItems([...newArray]);    
  }

  return (
    <div className="app">
      <Navbar />
      <div className="pos">
        <Ticket products={ticketItems} empty={emptyTicket} remove={removeProduct}/>
        <Menu addItems={addItems} />        
      </div>      
    </div>
  );
}

export default App;
