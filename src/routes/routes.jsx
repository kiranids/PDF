import React from 'react'
import { createBrowserRouter,  } from 'react-router-dom'

import Dashboard from '../layouts/dashboard'
import Reports from '../components/Reports'
import Graphs from '../components/Graphs'
import Stats from '../components/Statistics'

import Login from '../components/login'
import Register from '../components/register'
import ForgetPassword from '../components/forgetpass'

import UserInfoForm from '../components/form'
import Auth from '../layouts/auth'
// const navigate = useNavigate();
const router = createBrowserRouter([
  
    {
        path: '/',
        element: <Auth />,
        children: [
            {
                path: '',
                element: <Login />,
                index:'/'
            },
            {
                path: 'login',
                element: <Login />,
            },
          
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'forget',
                element: <ForgetPassword />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          
            {
                path: 'report',
                element: <Reports />,
            },
            {
                path: 'graph',
                element: <Graphs />
            },
            {
                path: 'Statistics',
                element: <Stats />
            },
            {
                path: 'form',
                element: <UserInfoForm />
            }
        ]
    },
 
])
export default router