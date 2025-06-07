import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router";
import './global.css';
import { AboutUs } from './components/pages/AboutUs';
import { Intro } from './components/pages/Intro';
import { Instruction } from './components/pages/Instruction';
import { Vlastnosti } from './components/Vlastnosti/Vlastnosti';
import { ListDetail } from './components/pages/list/ListDetail';
import { seznam } from './seznam';

createRoot(
  document.querySelector('#app'),
).render(<BrowserRouter>
<Routes>
      <Route element={<HomePage />} >
      <Route path="about-us" element={<AboutUs></AboutUs>}></Route>
      <Route index element={<Intro></Intro>}></Route>
      <Route path="instruction" element={<Instruction></Instruction>}></Route>
      <Route path="groups" element={<Vlastnosti></Vlastnosti>}></Route>
      <Route path="list" element={<ListDetail data={seznam}></ListDetail>}></Route>
      </Route>
    </Routes>
    
  </BrowserRouter>);
