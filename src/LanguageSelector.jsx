import { useLanguage } from './LanguageContext'; // importamos el hook 

const LanguageSelector = () => {

    const { language, changeLanguage } = useLanguage(); // usamos nuestro propio hook en lugar de useState()

    const handleChangeLanguage = (e) => {
        changeLanguage(e.target.value)
    };

    return(
        <>
            <label>Select Language: </label>
            <select value= {language} onChange= {handleChangeLanguage}> 
                <option value='en'>English</option>
                <option value='es'>Spanish</option>
                <option value='fr'>French</option>
            </select>
        </>
    )

};

export default LanguageSelector;