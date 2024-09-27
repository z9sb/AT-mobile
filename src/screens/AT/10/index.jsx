import style from './AT_10.module.css'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";

export default function AT_10() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = (() => {
    setMenuOpen(!menuOpen);
  });

  return (
    <div className={style.container}>
        
      <section className={`${style.menu} ${menuOpen ? style.menuOpen : ''}`}>
        <img 
        src="https://lms.infnet.edu.br/moodle/pluginfile.php/1/theme_remui/logomini/1722631119/infnet.png" 
        alt="Logo" 
        className={style.logo}/>

        <a 
        href="#"><FaHome 
        size={35} 
        className={style.FaHome} 
        onClick={toggleMenu}/>
        </a>

      </section>
      <div className={style.menuHome}>
      <menu className={`${style.menuTag} ${menuOpen ? style.menuOpen : style.menuHide }`}>
            <nav>
              <ul className={style.menuOptions}>
                <li><a href="">Produtos</a></li>
                <li><a href="">Serviços</a></li>
                <li><a href="">Contato</a></li>
              </ul>
            </nav>
          </menu>
      </div>
    </div>
  )
}
