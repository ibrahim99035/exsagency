import React, { createContext, useState } from "react";
import en from "../i18n/en.json";
import ar from "../i18n/ar.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const [content, setContent] = useState(en);

    const switchLanguage = (lang) => {
        setLanguage(lang);
        setContent(lang === "en" ? en : ar);
    };

    return (
        <LanguageContext.Provider value={{ language, content, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};