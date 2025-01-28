import { useEffect, useState } from 'react'
import dark from '../assets/dark.png'
import light from '../assets/light.png'

export default function DarkMode() {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )

    const element = document.documentElement

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <div>

            <img src={theme == 'light' ? dark : light}
                alt="dark"
                className='w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] '
                onClick={() => setTheme((curr) => (curr == 'dark' ? 'light' : 'dark'))}
            />
        </div>
    )
}