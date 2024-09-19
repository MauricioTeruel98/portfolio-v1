import uuid from 'react-uuid';

const proyectosPortfolio = [
    {
        id: 1,
        titulo: 'TANO, Tu Administrador de Negocio Online',
        bajada: 'Setio web para administrar negocios',
        contenido: 'Contiene un modo de suscripción de pago para que otro dueños de kioscos o negocios puedan acceder a este administrador. Estado actual: Modo suscripción pendiente de activación',
        link: 'https://almacenema.netlify.app',
        tecnologias: [{ react: true }, { node: true }, { mongo: false }, { tailwind: true }, { bootstrap: false }, { laravel: false }, { mysql: false }, { nextjs: true }, { javascript: false }, { supabase: true }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726763685/projects/awrgvz25mouo8fceyp9u.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726763684/projects/joajovk2ybkrujhdnryw.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726763684/projects/vwx1bngcu62u5n0crtty.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726763684/projects/ute5uclrvzghdageekcp.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726763685/projects/uzoq0c9lwd2decetv1ih.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726763685/projects/w2yrd7pqkqnqculhy2g9.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726763685/projects/a0jshgrx9liwgdpsg1s8.png'
        ],
        github: ""
    },
    {
        id: 2,
        titulo: 'App para administración de pedidos - React Native',
        bajada: 'Aplicación movil para administrar pedidos, realizar ventar y controlar los pedidos realizados para clientes. Utilizada por los repartidores de una panificación',
        contenido: '',
        link: '',
        tecnologias: [{ react: true }, { node: true }, { mongo: false }, { tailwind: true }, { bootstrap: false }, { laravel: false }, { mysql: false }, { nextjs: false }, { javascript: false }, { supabase: true }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709168479/projects/r71z0cmtrvo7atic0eb5.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/c_crop,g_auto,h_400,w_800/projects/akqsfqcrumdtq7chn0tx.jpg'
        ],
        github: ""
    },
    {
        id: 3,
        titulo: 'MkProps',
        bajada: 'Setio web de venta de propiedades',
        contenido: '',
        link: 'https://mkprops.netlify.app',
        tecnologias: [{ react: true }, { node: true }, { mongo: true }, { tailwind: true }, { bootstrap: false }, { laravel: false }, { mysql: false }, { nextjs: false }, { javascript: false }, { supabase: false }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709168479/projects/r71z0cmtrvo7atic0eb5.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/c_crop,g_auto,h_400,w_800/projects/akqsfqcrumdtq7chn0tx.jpg'
        ],
        github: ""
    },
    {
        id: 4,
        titulo: 'Stellar Experience',
        bajada: 'Sitio web para proyecto de hackaton Nasa Space Apps Challenge',
        contenido: '',
        link: 'https://stellarexp.netlify.app/',
        tecnologias: [{ react: true }, { node: false }, { mongo: false }, { tailwind: true }, { bootstrap: false }, { laravel: false }, { mysql: false }, { nextjs: false }, { javascript: false }, { supabase: false }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169108/projects/trhoacbekw1g2aiy1tg5.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169107/projects/zxxjkyll5obxzq6vmr0t.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169106/projects/klojuz9d7gsupho5pay9.png',
        ],
        github: "https://github.com/MauricioTeruel98/stellar-experience"
    },
    {
        id: 5,
        titulo: 'OkFood',
        bajada: 'Proyecto final de curso Rolling Code School',
        contenido: '',
        link: 'https://okfood-pf.netlify.app/',
        tecnologias: [{ react: true }, { node: true }, { mongo: true }, { tailwind: false }, { bootstrap: true }, { laravel: false }, { mysql: false }, { nextjs: false }, { javascript: false }, { supabase: false }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169106/projects/rbex4mr6kucas3qac2ks.png'
        ],
        github: "https://github.com/ContiLuna/Proyecto_Final_be"
    },
    {
        id: 6,
        titulo: 'Metro - En construcción',
        bajada: 'Sitio web para solicitar obras de carpinteria de aluminio y melamina',
        contenido: '',
        link: '',
        tecnologias: [{ react: true }, { node: false }, { mongo: false }, { tailwind: true }, { bootstrap: false }, { laravel: true }, { mysql: true }, { nextjs: false }, { javascript: false }, { supabase: false }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169841/projects/ecfnzubvfyt5sgcwckap.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169839/projects/ygw5kpuqd2xwvc3bs5la.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169837/projects/loo8vw9qo8wh8kfhrcj3.png',
        ],
        github: ""
    },
    {
        id: 7,
        titulo: 'Elevenflix',
        bajada: 'Sitio web del segundo proyecto del curso Rolling Code School',
        contenido: '',
        link: 'https://elevenflix.netlify.app/',
        tecnologias: [{ react: true }, { node: true }, { mongo: true }, { tailwind: true }, { bootstrap: true }, { laravel: true }, { mysql: true }, { nextjs: true }, { javascript: true }, { supabase: false }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169589/projects/hhqmqsvxtl6hw3sejz28.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169590/projects/vtpw0tucg1tewzefs6gt.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1709169588/projects/k6hcaobbgyov3loha8oq.png',
        ],
        github: "https://github.com/clementecejas/RollingMovies"
    }
]

export default proyectosPortfolio