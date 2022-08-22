import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import AdminForm from './Features/AdminForm';

const itemURL = 'http://localhost:3001/items'
const userURL = 'http://localhost:3002/users'
const reviewsURL = 'http://localhost:3003/reviews'

function App() { 
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <AdminForm/>
    </div>
  );
}

export {itemURL, userURL, reviewsURL}
export default App;
