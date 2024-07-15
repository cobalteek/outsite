import logo from './logo.svg';
import map from './images/map outside.svg'
import './App.css';
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'form'} element={<Form />}/>
        </Routes>
    </div>
  );
}

export default App;
