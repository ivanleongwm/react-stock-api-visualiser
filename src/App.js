import logo from './logo.svg';
import './App.css';
import Cards from './components/cards'
import Graphs from './components/graphs'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Header />
        <Graphs />
        <Cards/>
      </div>
    </div>
  );
}

export default App;
