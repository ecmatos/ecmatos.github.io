import React from 'react';
import ReactDOM from 'react-dom';
import routes from './components/Routes';
import { RouterProvider } from 'react-router-dom'

ReactDOM.render(
    <RouterProvider router={routes}/>, 
    document.getElementById('root') as HTMLElement);