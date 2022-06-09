import './index.css'; 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Material from "./pages/material";
import Search from "./pages/search";
import Chart from "./pages/chart";
import Contact from "./pages/Contact";
import Enterens from "./pages/Enterens";
import NoPage from "./pages/Nopage";

  
export default function App() {
  return (
    <BrowserRouter>
       <Layout />
      <Routes>
          <Route index element={<Home />} />
          <Route path="data" element={<Material />} />
          <Route path="Search" element={<Search />} />
          <Route path="Chart" element={<Chart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="enterens" element={<Enterens />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
