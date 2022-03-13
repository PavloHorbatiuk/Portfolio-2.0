import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './routes/MainPage'
import SkillPage from './routes/SkillsPage'
import ProjectsPage from './routes/ProjectsPage'
import ContactsPage from './routes/ContactsPage'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/portfolio_2.0' element={<App />} />
      <Route path='/home' element={<MainPage />} />
      <Route path='/skills' element={<SkillPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/contacts' element={<ContactsPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

