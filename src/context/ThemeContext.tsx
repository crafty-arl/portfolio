import { createContext, useContext, useState, ReactNode } from 'react';

const themes = {
  default: {
    background: 'bg-black',
    text: 'text-white',
    primary: 'text-blue-500',
  },
  sleek: {
    background: 'bg-gray-900',
    text: 'text-gray-100',
    primary: 'text-green-500',
  },
  apple: {
    background: 'bg-gray-50',
    text: 'text-gray-900',
    primary: 'text-blue-600',
  },
};

const ThemeContext = createContext({
  theme: themes.default,
  setTheme: (theme: string) => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(themes.default);

  const changeTheme = (themeName: string) => {
    setTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);