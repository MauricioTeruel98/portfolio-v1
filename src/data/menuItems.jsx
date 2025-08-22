import { BiHome, BiSolidContact } from 'react-icons/bi'
import { PiBagSimpleDuotone } from 'react-icons/pi'
import { FaTools } from 'react-icons/fa'
import { TbNotes } from 'react-icons/tb'
import { FiGithub } from 'react-icons/fi'
import uuid from 'react-uuid';

const menuItems = [
    {
        id: uuid(),
        nombre: "Inicio",
        icono: <BiHome />,
        link: "/#inicio"
    },
    {
        id: uuid(),
        nombre: "Skills",
        icono: <FaTools />,
        link: "/#skills"
    },
    {
        id: uuid(),
        nombre: "Portfolio",
        icono: <PiBagSimpleDuotone />,
        link: "/#portfolio"
    },
    {
        id: uuid(),
        nombre: "GitHub",
        icono: <FiGithub />,
        link: "/#github"
    },
    {
        id: uuid(),
        nombre: "Blog",
        icono: <TbNotes />,
        link: "/#blog"
    },
    {
        id: uuid(),
        nombre: "Contacto",
        icono: <BiSolidContact />,
        link: "/#contacto"
    },
]

export default menuItems