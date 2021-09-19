import Header from './Component/Header/Header'
import './App.css';
import Listting from './Component/Listting/Listting'
import Tutorial from './Component/Tutorial/Tutorial';
import News from './Component/News/News';
import Banner from './Component/Banner/Banner';
import Procedure from './Component/Procedure/Procedure';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Listting></Listting>
        <Tutorial></Tutorial>
        <News></News>
        <Banner></Banner>
        <Procedure></Procedure>
        <Footer></Footer>
    </div>
  );
}

export default App;
