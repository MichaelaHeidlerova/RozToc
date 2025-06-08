import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router';
import './global.css';
import { AboutUs } from './components/pages/AboutUs';
import { Intro } from './components/pages/Intro';
import { Instruction } from './components/pages/Instruction';
import { ListDetail } from './components/pages/list/ListDetail';
import { Groups } from './pages/Groups/Groups';
import { ClassList } from './components/pages/list/ClassList';
import { VytvoreniSkupin } from './pages/Groups/VytvoreniSkupin';

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<HomePage />}>
        <Route path="about-us" element={<AboutUs></AboutUs>}></Route>
        <Route index element={<Intro></Intro>}></Route>
        <Route path="instruction" element={<Instruction></Instruction>}></Route>
        <Route path="groups" element={<VytvoreniSkupin />}></Route>
        <Route path="groups/:id" element={<Groups />}></Route>
        <Route
          path="class-detail/:id"
          element={<ListDetail data={JSON.parse(localStorage.getItem('seznamZaku'))}></ListDetail>}
        ></Route>
        <Route
          path="class-list"
          element={
            <ClassList></ClassList>
          }
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
