import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Success from './pages/Success.jsx';
import OrderHistory from './pages/OrderHistory.jsx';
import Detail from './pages/Detail.jsx';

const router = createBrowserRouter([
    { path: '/', 
        element: <App/>,
        error: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },{
                path: '/about',
                element: <About/>
            },{
                path: '/contact',
                element: <Contact/>
            },{
                path: '/success',
                element: <Success/>
            },{
                path: '/orderHistory',
                element: <OrderHistory/>
            },{
                path: '/products/:id',
                element: <Detail/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);