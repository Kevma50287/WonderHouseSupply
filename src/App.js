import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

const itemURL = 'http://localhost:3001/items'
const userURL = 'http://localhost:3002/users'

function App() { 
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export {itemURL, userURL}
export default App;
