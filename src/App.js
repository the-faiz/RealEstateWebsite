import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Options from './components/Options';
import Search from './components/Search';
import List from './components/List';
import Carousel from './components/Carousel';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Options/>
      <Search/>
      <List title="Trending Properties" name="Atif"/>
      <List title="Top Builders"/>
      <List title="Top Locations"/>
      <List title="Explore Localities"/>
      <Carousel/>
      <Review/>
      <Footer/>
    </>
  );
}

export default App;
