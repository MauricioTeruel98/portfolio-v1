import { useContext, useState, useEffect } from 'react'
import PortfolioContext from '../context/PortfolioProvider'

const usePortfolio = () => {
    return useContext(PortfolioContext)
}

export const useSmoothScroll = () => {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            setShowScrollTop(scrollTop > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
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