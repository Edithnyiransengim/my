import './css/style.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Side from"./components/Side";
import Footer from "./components/Footer";



let App =() =>{
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
      <Side/>
    </div>
  );
}

export default App;
