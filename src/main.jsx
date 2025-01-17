import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Category from './Components/Category.jsx'
import Users from './Components/Users.jsx'
import UserDetails from './Components/UserDetails.jsx'
import JobDetails from './Components/JobDetails.jsx'
import Jobs from './Components/Jobs.jsx'
import AddJob from './Components/AddJob.jsx'
import EditJob from './Components/EditJob.jsx'

const router = createBrowserRouter([
 {
   path: '/', element: <App />, 
   children: [
    {
      path: '/category/:cate_name',
      element: <Category />,
    }
   ]
 },
 {
  path: '/users', element: <Users />, 
  children: [
    {
      path: '/users/:user_id/:uname',
      element: <UserDetails />,
    }
   ]
 },
 {
  path: '/jobs', element: <Jobs />,
 },
 {
  path: '/jobs/:job_id', element: <JobDetails />,
 },
 {
  path: '/add-job', element: <AddJob />
 },
 {
   path: '/edit-job/:job_id', element: <EditJob />,
 },
 {
  path: '*',
  element: <h1 className='text-[66px]'>Page Not Found</h1>
 }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
