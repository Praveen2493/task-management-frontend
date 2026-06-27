import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../pages/dashboard/Dashboard'
import Tasks from '../pages/tasks/Tasks'
import CreateTask from '../pages/tasks/CreateTask'
import TaskDetails from '../pages/tasks/TaskDetails'
import Notifications from '../pages/notifications/Notifications'
import Profile from '../pages/profile/Profile'
import Settings from '../pages/settings/Settings'
import EditTask from '../components/tasks/EditTask'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>


    <Route path='/dashboard' element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>
    <Route path='/tasks' element={<ProtectedRoute> <Tasks/> </ProtectedRoute>}/>
    <Route path='/tasks/create' element={<ProtectedRoute> <CreateTask/>  </ProtectedRoute>}/>
    <Route
  path="/task/:id"
  element={
    <ProtectedRoute>
      <TaskDetails />
    </ProtectedRoute>
  }
/>
    {/* <Route path='/notificaions' element={<ProtectedRoute><Notifications/></ProtectedRoute>}/> */}
    <Route path="/profile"element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
    <Route path="/settings" element={ <ProtectedRoute><Settings /></ProtectedRoute>}/>
    <Route path='/tasks/edit/:id' element={<ProtectedRoute> <EditTask/> </ProtectedRoute> }/>
   
     </Routes>
  )
}

export default AppRoutes;
