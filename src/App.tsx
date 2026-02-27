import AppHeader from "./components/header/Header"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import WatchMovie from "./pages/watch-movie/WatchMovie";
import Services from "./service/Services";
import About from './pages/about/About';
import Contact from './pages/contact/Contact';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AppHeader />

        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/watch/:id" element={<WatchMovie />} />
           <Route path="/services" element={<Services/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/contact" element={<Contact/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

