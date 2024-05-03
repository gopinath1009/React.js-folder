import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
// import Login from './Components/login/Admin'
import ContactUs from './Components/ContactUs/Contactus'
import Teacherlogin from './Components/login/Teacher'
import Adminlogin from './Components/login/Admin'
import Parentlogin from './Components/login/parent'
import Adminpanel from './Components/panels/Admin/AdminPanel'
import AddTeacher from './Components/Addpage/AddTeacher'
// import TeacherPanel from './Components/panels/Teacher/TeacherPanel'
import VETeacher from './Components/panels/Admin/VETeacher'
import AddStudent from './Components/Addpage/Addstudent'
import VEStudent from './Components/panels/Admin/VEStudent'
import TeacherPanel from './Components/panels/Teacher/TeacherPanel'
import ParentPanel from './Components/panels/Parent/ParentPanel'

// import { Link } from 'react-router-dom'

function App() {

  return <div>
    <BrowserRouter>
      <Routes>

        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<ContactUs/>}/>
        <Route path='/admin'element={<Adminlogin/>}/>
        <Route path='/teacher'element={<Teacherlogin/>}/>
        <Route path='/parent'element={<Parentlogin/>}/>
        <Route path='/Admin-panel'element={<Adminpanel/>}/>
        <Route path='/teacher-panel/:id'element={<TeacherPanel/>}/>
        <Route path='/parent-panel/:id'element={<ParentPanel/>}/>
        <Route path='/Add-page-teacher'element={<AddTeacher/>}/>
        <Route path='/Add-page-student'element={<AddStudent/>}/>
        <Route path='/View/:userid/:mode'element={<VETeacher/>}/>
        <Route path='/View/student/:userid/:mode'element={<VEStudent/>}/>
       
        
        

      </Routes>
    </BrowserRouter>
   



  </div>
}

export default App
