import logo from './logo.svg';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  return (
    <div className="App">
<NavBar/>
     <ItemListContainer greeting={"hola a todos!"}/>
    </div>
  );
}

export default App;
