
import Publicaciones from "../components/Publicaciones"
import Explorar from "../components/Explorar"
import useDarkmode from "../hook/useDarkmode";

function HomePage() {
  const [colorTheme, setTheme] = useDarkmode();
  return (
    
    <div className="flex">
      <Publicaciones />
      <Explorar />
    </div>
    
  )
}

export default HomePage
