import { BiHome, BiSolidContact } from 'react-icons/bi'
import { PiBagSimpleDuotone } from 'react-icons/pi'
import { FaTools } from 'react-icons/fa'
import { TbNotes } from 'react-icons/tb'
import uuid from 'react-uuid';

const menuItems = [
    {
        id: uuid(),
        nombre: "Inicio",
        icono: <BiHome />,
        link: "/"
    },
    {
        id: uuid(),
        nombre: "Skills",
        icono: <FaTools />,
        link: ""
    },
    {
        id: uuid(),
        nombre: "Portfolio",
        icono: <PiBagSimpleDuotone />,
        link: ""
    },
    {
        id: uuid(),
        nombre: "Blog",
        icono: <TbNotes />,
        link: ""
    },
    {
        id: uuid(),
        nombre: "Contacto",
        icono: <BiSolidContact />,
        link: ""
    },
]

export default menuItems