import { createContext } from "react";

const PortfolioContext = createContext();

const PortfolioProvider = ({children}) => {

    const clasesParaAnimacion = "cursor-pointer transition duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95 hover:scale-105"

    return (
        <PortfolioContext.Provider
            value={
                {
                    clasesParaAnimacion
                }
            }
        >
            {children}
        </PortfolioContext.Provider>
    )
}

export {
    PortfolioProvider
}
export default PortfolioContext;