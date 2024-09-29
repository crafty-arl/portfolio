import { useTheme } from '../context/ThemeContext';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div className="flex space-x-4 p-4">
      <button onClick={() => setTheme('default')} className="p-2 bg-blue-500 text-white rounded">Default</button>
      <button onClick={() => setTheme('sleek')} className="p-2 bg-green-500 text-white rounded">Sleek</button>
      <button onClick={() => setTheme('apple')} className="p-2 bg-blue-600 text-white rounded">Apple</button>
    </div>
  );
}