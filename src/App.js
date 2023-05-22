
import './App.css';
import AnimalComponent from './components/AnimalComponent';
import NewsComponent from './components/NewsComponent';

function App() {
  return (
    <div className="App">
     <div class="AnimalsList"><AnimalComponent/></div>
     <div class="NewsList"><NewsComponent/></div>
    </div>
    
  );
}

export default App;
