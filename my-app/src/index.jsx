import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router';
import './global.css';
import { AboutUs } from './components/pages/AboutUs';
import { Intro } from './components/pages/Intro';
import { Instruction } from './components/pages/Instruction';
import { ListDetail } from './components/pages/list/ListDetail';
import { Groups } from './pages/Groups/Groups';
import { ClassList } from './components/pages/list/ClassList';
import { VytvoreniSkupin } from './pages/Groups/VytvoreniSkupin';
import { Timer } from './components/Timer/Timer';

createRoot(document.querySelector('#app')).render(
  <HashRouter>
    <Routes>
      <Route element={<HomePage />}>
        <Route path="about-us" element={<AboutUs></AboutUs>}></Route>
        <Route index element={<Intro></Intro>}></Route>
        <Route path="instruction" element={<Instruction></Instruction>}></Route>
        <Route path="groups" element={<VytvoreniSkupin />}></Route>
        <Route path="groups/:id" element={<Groups />}></Route>
        <Route path="timer" element={<Timer />}></Route>
        <Route
          path="class-detail/:id"
          element={
            <ListDetail />
          }
        ></Route>
        <Route path="class-list" element={<ClassList></ClassList>}></Route>
      </Route>
    </Routes>
  </HashRouter>,
);
