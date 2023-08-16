import { BiLogoReact, BiLogoJavascript } from 'react-icons/bi'
import { FaLaravel, FaNodeJs, FaBootstrap } from 'react-icons/fa'
import { SiMysql, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import uuid from 'react-uuid';

const skills = [
    {
        id: uuid(),
        nombre: "",
        icono: <BiLogoReact />
    },
    {
        id: uuid(),
        nombre: "",
        icono: <BiLogoJavascript />
    },
    {
        id: uuid(),
        nombre: "",
        icono: <FaLaravel />
    },
    {
        id: uuid(),
        nombre: "",
        icono: <FaNodeJs />
    },
    {
        id: uuid(),
        nombre: "",
        icono: <SiMysql />
    },
    {
        id: uuid(),
        nombre: "",
        icono: <SiMongodb />
    },
    {
        id: uuid(),
        nombre: "",
        icono: <SiTailwindcss />
    },
    {
        id: uuid(),
        nombre: "",
        icono: <FaBootstrap />
    },
    // {
    //     id: uuid(),
    //     nombre: "",
    //     icono: <TbBrandNextjs />
    // },

]

export default skills