import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Inicio from './views/Inicio';
import DetalleProyecto from './views/DetalleProyecto';
import DetalleBlogPost from './views/DetalleBlogPost';
import Certificados from './views/Certificados';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/portfolio/:id',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <DetalleProyecto/>,
            }
        ]
    },
    {
        path: '/post/:id',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <DetalleBlogPost/>,
            }
        ]
    },
    {
        path: '/certificados',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Certificados/>,
            }
        ]
    }
])

export default router;