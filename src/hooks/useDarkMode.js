import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key, initialValue) => {
  const [theme, setTheme] = useLocalStorage(key, initialValue)

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [theme])

  return [theme, setTheme]
}
