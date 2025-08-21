import uuid from 'react-uuid';

const proyectosPortfolio = [
    {
        id: 1,
        titulo: 'Urbani.info | Propiedades en alquiler y venta',
        bajada: 'Sitio web para alquiler y venta de propiedades',
        contenido: 'Propietarios y agentes inmobiliarios pueden publicar sus propiedades en el sitio web y gestionarlas desde el panel de control, y llegar más facilmente a posibles clientes. Contiene un mapa interactivo para visualizar las propiedades.',
        link: 'https://urbani.info',
        tecnologias: [{ react: true }, { node: true }, { mongo: false }, { tailwind: true }, { bootstrap: false }, { laravel: true }, { mysql: true }, { nextjs: false }, { javascript: false }, { supabase: false }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755813664/projects/urbani/Captura_de_pantalla_2025-08-21_184208_gawirk.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755813639/projects/urbani/979shots_so_hn7qr5.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755813642/projects/urbani/439shots_so_romnxu.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755813644/projects/urbani/897shots_so_fm06am.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755813642/projects/urbani/337shots_so_tvp3l2.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755813641/projects/urbani/44shots_so_ecyfhf.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755813641/projects/urbani/205shots_so_lpa1ub.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755813637/projects/urbani/525shots_so_jxtol2.png'
        ],
        github: "https://github.com/MauricioTeruel98/market-props-v2"
    },
    {
        id: 2,
        titulo: 'EventProCalendar',
        bajada: 'Sitio web para la gestión de eventos',
        contenido: 'Sitio web para la gestión de eventos, con un calendario interactivo para visualizar los eventos y un panel de control para la gestión de eventos, donde el usuario tambien puede cargar que items se requieren para cada evento.',
        link: 'https://www.eventprocalendar.site',
        tecnologias: [{php: true}, { react: true }, { node: true }, { mongo: false }, { tailwind: true }, { bootstrap: false }, { laravel: false }, { mysql: true }, { nextjs: false }, { javascript: false }, { supabase: false }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755820426/projects/eventcalendar/91shots_so_nszjeh.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755820407/projects/eventcalendar/545shots_so_goxz4t.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755820407/projects/eventcalendar/996shots_so_nmh5il.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755820424/projects/eventcalendar/699shots_so_wy6kyx.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755820424/projects/eventcalendar/451shots_so_jonvaw.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1755820430/projects/eventcalendar/772shots_so_cbd6m3.png',
        ],
        github: "https://github.com/MauricioTeruel98/calendario-eventos"
    },
    {
        id: 3,
        titulo: 'TANO, Tu Administrador de Negocio Online',
        bajada: 'Sitio web para administrar negocios',
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
        github: "https://github.com/MauricioTeruel98/my-admin-dashboard"
    },
    {
        id: 4,
        titulo: 'App para administración de pedidos - React Native',
        bajada: 'Aplicación movil para administrar pedidos, realizar ventar y controlar los pedidos realizados para clientes. Utilizada por los repartidores de una panificación',
        contenido: '',
        link: '',
        tecnologias: [{ react: true }, { node: true }, { mongo: false }, { tailwind: true }, { bootstrap: false }, { laravel: false }, { mysql: false }, { nextjs: false }, { javascript: false }, { supabase: true }],
        imagen: [
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726764833/projects/fbbbkhapapu8rrh3zinh.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726764832/projects/apb4ih1oz01jiyp8n1hg.png',
            'https://res.cloudinary.com/dhygcahmm/image/upload/v1726764835/projects/iqtkyd1nfkahyolihgif.png'
        ],
        github: "https://github.com/MauricioTeruel98/app-pedidos"
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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