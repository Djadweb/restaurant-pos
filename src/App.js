import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Ticket from './Components/Ticket/Ticket';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="pos">
        <Ticket />
        <Menu />        
      </div>      
    </div>
  );
}

export default App;
