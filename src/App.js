import "./App.css";
import NavBar from './componenet/NavBar';
import Footer from './componenet/Footer';
import Home from "./componenet/Home";
import Blog from "./componenet/Blog";
import ContactMe from "./componenet/ContactMe";
import SingleBlog from "./componenet/SingleBlog";
import NotFound from "./componenet/NotFound";
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />}>
            <Route path=":blogid" element={<SingleBlog />} />
        </Route>
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="*" element={< NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;








/* 
 className="App"
    <NavBar />
    <Content />
    <Footer />
    */
