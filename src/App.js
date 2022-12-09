import React from "react";
import { BrowserRouter,Routes,Rout, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./layout/layout";
import Basket from "./pages/Basket/basket";
import Home from "./pages/Home/home";
import Contacts from "./pages/Contacts/contacts";
import Servis from "./pages/servis/servis";
import NotFound from "./pages/notFound/notFound";
import Login from "./register/Login";
import Register from "./register/register";
import Detailes from "./register/detailes";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <ToastContainer/>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index path="/" element={<Home/>} />
                <Route path="/basket" element={<Basket/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/servis" element={<Servis/>} />
                <Route path="/notFound" element={<NotFound/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/detailes" element={<Detailes/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
