import { createContext, useContext, useState } from "react";

const LanguageContext = createContext()

// el contexto necesita un proveedor de contexto.
    // {children} -> significa que todo componente envuelto por el proveedor podrá aplicar el contexto
export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en');
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    };

    return (
        <>
        <LanguageContext.Provider value= {{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
        </>
    )
}

// exportamos el contexto por medio de la creación de nuestro propio hook.
export const useLanguage = () => useContext(LanguageContext);