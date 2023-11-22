import './App.css';
import { BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom';
import Main from './components/Main';
import Admin from './components/Admin';
import Vote from './components/Vote';
import Thanks from './components/Thanks';
import Head from './components/Header';
import Reg from './components/Reg';
import AdminMain from './components/AdminMain';
import AddDelete from './components/Add';
import Modify from './components/Modify';
import ViewVotes from './components/ViewVotes';
import About from './components/about';
import Motto from './components/motto';
import Contact from './components/contact';

function App() {
  return (
    
    <BrowserRouter>
    <Head></Head>
      <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/motto" element={<Motto />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/adddelete" element={<AddDelete />} />
      <Route path="/modify" element={<Modify />} />
      <Route path="/adminmain" element={<AdminMain />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/viewvotes" element={<ViewVotes />} />
      <Route path="/vote/thanks" element={<Thanks />} />
      <Route path="/about" element={<About />} />
      
      </Routes>
      </BrowserRouter>    
  );
}

export default App;
