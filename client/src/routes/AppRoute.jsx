import Layout from '@/layouts/Layout';
import LayoutAdmin from '@/layouts/LayoutAdmin';
import About from '@/pages/About';
import Dashboard from '@/pages/admin/Dashboard';
import Manage from '@/pages/admin/Manage';
import Place from '@/pages/admin/Place';
import Home from '@/pages/Home';
import Notfound from '@/pages/Notfound';
import React from 'react'
import { Outlet } from 'react-router';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Publish */}
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Route>

        {/* Private */}
        <Route path='admin' element={<LayoutAdmin/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='manage' element={<Manage/>}/>
            <Route path='place' element={<Place/>}/>
        </Route>

        {/* Not found */}
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute