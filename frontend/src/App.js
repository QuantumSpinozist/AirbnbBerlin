import FormContainer from "./components/FormContainer";
import Navbar from "./components/Navbar";
import './index.css';
import berlin from './images/berlin.jpg';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src={berlin} className="image"/>
      <FormContainer/>
    </div>
  );
}

export default App;
