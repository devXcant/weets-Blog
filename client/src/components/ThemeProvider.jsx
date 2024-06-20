import { useSelector } from "react-redux";
function ThemeProvider({children}) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-white dark:bg-[rgb(16,23,42)}">
        {children}
      </div>
    </div>
  );
}

export default ThemeProvider;
