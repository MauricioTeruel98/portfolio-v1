import { BiLogoReact, BiLogoJavascript } from 'react-icons/bi'
import { FaLaravel, FaNodeJs, FaBootstrap } from 'react-icons/fa'
import { SiMysql, SiMongodb, SiTailwindcss, SiWordpress, SiPhp, SiSupabase, SiTypescript, SiPython } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import uuid from 'react-uuid';

const skills = [
    {
        id: uuid(),
        nombre: "React | React Native",
        icono: <BiLogoReact />
    },
    {
        id: uuid(),
        nombre: "JavaScript",
        icono: <BiLogoJavascript />
    },
    {
        id: uuid(),
        nombre: "Laravel",
        icono: <FaLaravel />
    },
    {
        id: uuid(),
        nombre: "Node.js",
        icono: <FaNodeJs />
    },
    {
        id: uuid(),
        nombre: "MySQL",
        icono: <SiMysql />
    },
    {
        id: uuid(),
        nombre: "MongoDB",
        icono: <SiMongodb />
    },
    {
        id: uuid(),
        nombre: "TailwindCSS",
        icono: <SiTailwindcss />
    },
    // {
    //     id: uuid(),
    //     nombre: "Bootstrap",
    //     icono: <FaBootstrap />
    // },
    {
        id: uuid(),
        nombre: "Next.js",
        icono: <TbBrandNextjs />
    },
    {
        id: uuid(),
        nombre: "Wordpress",
        icono: <SiWordpress />
    },
    {
        id: uuid(),
        nombre: "PHP",
        icono: <SiPhp />
    },
    {
        id: uuid(),
        nombre: "TypeScript",
        icono: <SiTypescript />
    },
    {
        id: uuid(),
        nombre: "Python",
        icono: <SiPython />
    }

]

export default skills