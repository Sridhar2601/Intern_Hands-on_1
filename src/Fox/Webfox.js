import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from './Home';
import About from './About';
import Course from './Course';
import Staff from './Staff';
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from './Footer';
import Contactget from "./Contactget";
import Quoteget from "./Quoteget";
export default function Webfox(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={[<Nav/>,<Home/>,<Footer/>]}></Route>
                <Route path="/About" element={[<Nav/>,<About/>,<Footer/>]}></Route>
                <Route path="/Course" element={[<Nav/>,<Course/>,<Footer/>]}></Route>
                <Route path="/Staff" element={[<Nav/>,<Staff/>,<Footer/>]}></Route>
                <Route path="/Blog" element={[<Nav/>,<Blog/>,<Footer/>]}></Route>
                <Route path="/Contact" element={[<Nav/>,<Contact/>,<Footer/>]}></Route>
                <Route path="/get" element={[<Contactget/>]}></Route>
                <Route path="/qget" element={[<Quoteget/>]}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}