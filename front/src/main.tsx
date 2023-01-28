import './index.css'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router'
import { apiSlice } from './store/api'
import { ApiProvider } from '@reduxjs/toolkit/query/react';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApiProvider api={apiSlice}>
    <RouterProvider router={router} />
  </ApiProvider>,
)
