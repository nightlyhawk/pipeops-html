import React, { createContext, useState } from 'react';


const ThemeDataContext = createContext(null);
const ThemeContextProvider = ({children}) => {
    const [themestatus, setThemeStatus] = useState('dark');
  return (
    <ThemeDataContext.Provider value={{ themestatus, setThemeStatus }}>
        {children}
    </ThemeDataContext.Provider>
  )
}

export { ThemeContextProvider, ThemeDataContext }