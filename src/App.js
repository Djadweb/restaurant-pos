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
  
  return (
    <div className="app">
      <Navbar />
      <div className="pos">
        <Ticket products={ticketItems} empty={emptyTicket}/>
        <Menu addItems={addItems} />        
      </div>      
    </div>
  );
}

export default App;
