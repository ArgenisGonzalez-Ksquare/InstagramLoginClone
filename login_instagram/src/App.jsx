import './App.css';
import Login from "./components/Login";
import ImgPhone from './components/ImgPhone'
import { Fragment } from 'react';
import Footer from './components/footer';


function App() {
  return (
    <>
    <body>
      <ImgPhone/>
      <Login/>
    </body>
    <Footer/>
    </>
  );
}

export default App;
