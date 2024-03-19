import { BiLogoGithub, BiLogoLinkedinSquare, BiSolidEnvelope, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';
import uuid from 'react-uuid';

const redesSociales = [
    {
        id: uuid(),
        nombre: "github",
        icono: <BiLogoGithub />,
        link: "https://github.com/MauricioTeruel98"
    },
    {
        id: uuid(),
        nombre: "instagram",
        icono: <BiLogoInstagram />,
        link: "https://www.instagram.com/mauricioteruel1/?theme=dark"
    },
    {
        id: uuid(),
        nombre: "linkedin",
        icono: <BiLogoLinkedinSquare />,
        link: "https://www.linkedin.com/in/mauricio-teruel/"
    },
    // {
    //     id: uuid(),
    //     nombre: "email",
    //     icono: <BiSolidEnvelope />,
    //     link: ""
    // }
]

export default redesSociales