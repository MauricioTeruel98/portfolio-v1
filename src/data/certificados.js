import uuid from 'react-uuid';

// Importar las imágenes de preview
import alkemyPreview from '../assets/certificates/previews/alkemy.png';
import iaWebPreview from '../assets/certificates/previews/ia_web_udemy.png';
import industria4Preview from '../assets/certificates/previews/ingelearn_4_0.png';
import javascriptNodePreview from '../assets/certificates/previews/javascript_node_udemy.png';
import laravelReactPreview from '../assets/certificates/previews/laravel_react.png';
import mernPreview from '../assets/certificates/previews/mern_rollingcodeschool_mayo_2023.jpg';
import phpLaravelPreview from '../assets/certificates/previews/php_laravel.png';
import wordpressPreview from '../assets/certificates/previews/wordpress.png';

// Importar los PDFs y certificados en imagen
import alkemyPdf from '../assets/certificates/certificado-alkemy_agosto_2023.pdf';
import iaWebPdf from '../assets/certificates/IA_web_chrome_agosto_2025.pdf';
import industria4Pdf from '../assets/certificates/industria_4_0_ingelearn_mayo_2025.pdf';
import javascriptNodePdf from '../assets/certificates/javascript_node_febrero_2023.pdf';
import laravelReactPdf from '../assets/certificates/laravel_react_agosto_2023.pdf';
import phpLaravelPdf from '../assets/certificates/php_laravel_febrero_2023.pdf';
import wordpressPdf from '../assets/certificates/wordpress_macweb_agosto_2025.pdf';
import mernCertificado from '../assets/certificates/mern_rollingcodeschool_mayo_2023.jpg';

const certificados = [
    {
        id: uuid(),
        titulo: "Desarrollo Full Stack MERN",
        institucion: "Rolling Code School",
        fecha: "Mayo 2023",
        descripcion: "Programa integral de desarrollo Full Stack utilizando MongoDB, Express.js, React y Node.js. Incluye desarrollo de aplicaciones web completas, APIs RESTful y despliegue en producción.",
        preview: mernPreview,
        archivo: mernCertificado, // Imagen del certificado completo
        destacado: true,
        tecnologias: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
        duracion: "6 meses",
        tipo: "Bootcamp"
    },
    {
        id: uuid(),
        titulo: "Laravel & React - Desarrollo Web Moderno",
        institucion: "Udemy",
        fecha: "Agosto 2023",
        descripcion: "Especialización en desarrollo web moderno combinando Laravel como backend y React como frontend. Arquitectura de APIs, autenticación, y mejores prácticas de desarrollo.",
        preview: laravelReactPreview,
        archivo: laravelReactPdf,
        destacado: true,
        tecnologias: ["Laravel", "React", "PHP", "JavaScript", "MySQL"],
        duracion: "25 horas",
        tipo: "Curso Online"
    },
    {
        id: uuid(),
        titulo: "IA Web integrada en Chrome - Gemini Nano",
        institucion: "Udemy",
        fecha: "Agosto 2025",
        descripcion: "Curso sobre implementación de IA en aplicaciones web. Incluye utilización de APIs de IA integradas en Chrome y gemini nano",
        preview: iaWebPreview,
        archivo: iaWebPdf,
        destacado: true,
        tecnologias: ["AI", "JavaScript", "APIs", "Chrome", "Gemini Nano"],
        duracion: "5.5 horas",
        tipo: "Curso Online"
    },
    {
        id: uuid(),
        titulo: "WordPress Development con Elementor",
        institucion: "MacWeb",
        fecha: "Agosto 2025",
        descripcion: "Desarrollo y customización avanzada de WordPress. Elementor, plugins, WooCommerce y optimización SEO.",
        preview: wordpressPreview,
        archivo: wordpressPdf,
        destacado: false,
        tecnologias: ["WordPress", "PHP", "WooCommerce", "SEO", "Elementor"],
        duracion: "5 horas",
        tipo: "Curso Online"
    },
    {
        id: uuid(),
        titulo: "Certificación Alkemy",
        institucion: "Alkemy",
        fecha: "Agosto 2023",
        descripcion: "Certificación en desarrollo web Full Stack con énfasis en metodologías ágiles y mejores prácticas de la industria.",
        preview: alkemyPreview,
        archivo: alkemyPdf,
        destacado: false,
        tecnologias: ["Full Stack", "Metodologías Ágiles", "Best Practices"],
        duracion: "3 meses",
        tipo: "Certificación"
    },
    {
        id: uuid(),
        titulo: "Industria 4.0 y Transformación Digital",
        institucion: "IngeLearn",
        fecha: "Mayo 2025",
        descripcion: "Programa enfocado en las tecnologías de la Industria 4.0, IoT, automatización y transformación digital en empresas.",
        preview: industria4Preview,
        archivo: industria4Pdf,
        destacado: false,
        tecnologias: ["IoT", "Automatización", "Transformación Digital", "Industria 4.0"],
        duracion: "6 horas",
        tipo: "Certificación"
    },
    {
        id: uuid(),
        titulo: "JavaScript & Node.js Avanzado",
        institucion: "Udemy",
        fecha: "Febrero 2023",
        descripcion: "Curso avanzado de JavaScript moderno y desarrollo backend con Node.js. Incluye ES6+, asincronía, APIs y microservicios.",
        preview: javascriptNodePreview,
        archivo: javascriptNodePdf,
        destacado: false,
        tecnologias: ["JavaScript", "Node.js", "ES6+", "APIs", "Microservicios"],
        duracion: "12 horas",
        tipo: "Curso Online"
    },
    {
        id: uuid(),
        titulo: "PHP & Laravel - Desarrollo Backend",
        institucion: "Udemy",
        fecha: "Febrero 2023",
        descripcion: "Especialización en desarrollo backend con PHP y Laravel. Arquitectura MVC, Eloquent ORM, autenticación y APIs RESTful.",
        preview: phpLaravelPreview,
        archivo: phpLaravelPdf,
        destacado: false,
        tecnologias: ["PHP", "Laravel", "MVC", "Eloquent", "MySQL"],
        duracion: "56 horas",
        tipo: "Curso Online"
    }
];

// Función para obtener solo los certificados destacados
export const getCertificadosDestacados = () => {
    return certificados.filter(cert => cert.destacado);
};

// Función para obtener todos los certificados
export const getTodosCertificados = () => {
    return certificados;
};

export default certificados;
