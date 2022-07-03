import { BrowserRouter, useLocation } from 'react-router-dom';
import './App.css';
import Contact from './components/common/Contact';
import FloatingActionButton from './components/common/FloatingActionButton';
import Navbar from './components/common/Navbar';
import ScrollToTop from './helper/ScrollToTop';
import Routing from './Routing';
import AdminRouting from './components/admin/AdminRouting';

function App() {
  if (window.location.pathname.startsWith('/admin')) {
    return (
      <BrowserRouter>
        <AdminRouting />
      </BrowserRouter>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routing />
        <Contact />
        <FloatingActionButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
