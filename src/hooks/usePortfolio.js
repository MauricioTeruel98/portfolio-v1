import { useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PortfolioContext from '../context/PortfolioProvider'

const usePortfolio = () => {
    return useContext(PortfolioContext)
}

export const useSmoothScroll = () => {
    const [showScrollTop, setShowScrollTop] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            setShowScrollTop(scrollTop > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        // Si estamos en la página de inicio, hacer scroll a la sección
        if (location.pathname === '/') {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        } else {
            // Si estamos en otra página, redirigir a inicio con el hash
            navigate(`/#${sectionId}`)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return { scrollToSection, scrollToTop, showScrollTop }
}

export default usePortfolio