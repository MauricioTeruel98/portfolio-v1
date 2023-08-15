import { BiLogoGithub, BiLogoLinkedinSquare, BiSolidEnvelope, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';
import uuid from 'react-uuid';

const redesSociales = [
    {
        id: uuid(),
        nombre: "github",
        icono: <BiLogoGithub />,
        link: ""
    },
    {
        id: uuid(),
        nombre: "instagram",
        icono: <BiLogoInstagram />,
        link: ""
    },
    {
        id: uuid(),
        nombre: "linkedin",
        icono: <BiLogoLinkedinSquare />,
        link: ""
    },
    {
        id: uuid(),
        nombre: "email",
        icono: <BiSolidEnvelope />,
        link: ""
    }
]

export default redesSociales