import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import { AnswerMode } from './routes/answerMode';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: < AnswerMode />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


