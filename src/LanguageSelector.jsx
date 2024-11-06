import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
 const { language, changeLanguage } = useLanguage();

 const handleChangeLanguage = (event) => {
    changeLanguage(event.target.value)
 }

 return (
    <>
    <label>Selecciona el lenguaje</label>
    <select value={language} onChange={handleChangeLanguage}>
        <option value="en">Inglés</option>
        <option value="es">Español</option>
        <option value="fr">Francés</option>
    </select>
    </>
 )
}

export default LanguageSelector;