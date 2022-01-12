// import { useState, useEffect } from "react";
// import { useTranslation, withTranslation } from "react-i18next";
// import i18next from "i18next";
// import i18n from "../../utils/i18nextInit";

// // const languageMap: any = {
// //   en: { label: "English", dir: "ltr", active: true },
// //   es: { label: "Español", dir: "ltr", active: false },
// // };
// function LanguageSelect(): JSX.Element {
//   const selected: any = localStorage.getItem("i18nextLng") || "en";
//   const [lenguage, setLenguage] = useState('');

//   const changeLanguage = (lng: string) => {
//     setLenguage(lng);
//     i18n.changeLanguage(lng);
//   };

//   useEffect(() => {
//     document.body.dir = lenguage;
//     console.info(lenguage);
//   }, [lenguage, selected]);
//   return (
//     <div className="main-selector">
//       <button onClick={() => changeLanguage("es")}>es</button>
//       <button onClick={() => changeLanguage("en")}>en</button>
//     </div>
//   );
// }
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../utils/i18nextInit";

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  return (
    <select
      defaultValue={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {availableLanguages.map((language: string) => (
        <option key={language}>{language}</option>
      ))}
    </select>
  );
};

export default LanguageSelect;
