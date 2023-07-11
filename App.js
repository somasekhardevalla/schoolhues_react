// import logo from './logo.svg';
import './App.css';
import Search_Box from './components/Search_Box'
import Schools from './components/Schools'
import Browse from './components/Browse'
import Video from './components/Video'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Search_Box/>
      <Schools/>
      <Browse/>
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;
