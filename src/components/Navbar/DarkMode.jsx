import React from 'react';
import LigntButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';
const DarkMode = () => {
    const[theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement; //html element 

    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
      }, [theme]);

      const toggleTheme =() => {
        setTheme((prevTheme) =>(prevTheme === "light" ? "dark" : "light"));
      }

  return (
    <div className='relative'> 
      <img src={LigntButton} alt="" 
      onClick={toggleTheme}
      className={`w-12 cursor-pointer drop-shadow-[1px,1px,1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"  }` }
      />
      <img src={DarkButton} alt="" 
       onClick={theme}
       className='w-12 cursor-pointer drop-shadow-[1px,1px,1px_rgba(0,0,0,0.1)] transition-all duration-300 ' 
      />
    </div>
  );
};

export default DarkMode;
