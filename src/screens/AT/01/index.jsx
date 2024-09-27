import style from './AT_01.module.css'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";

export default function AT_01() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = (() => {
    setMenuOpen(!menuOpen);
  });

  return (
    <div className={style.container}>
      <section>
        <img src="https://lms.infnet.edu.br/moodle/pluginfile.php/1/theme_remui/logomini/1722631119/infnet.png" alt="Logo" className={style.logo}/>
      </section>

      <section className={`${style.menu} ${menuOpen ? style.menuOpen : ''}`}>
          <menu className={`${style.menuTag} ${menuOpen ? style.menuOpen : style.menuHide }`}>
            <nav>
              <ul className={style.menuOptions}>
                <li><a href="">Produtos</a></li>
                <li><a href="">Serviços</a></li>
                <li><a href="">Contato</a></li>
              </ul>
            </nav>
          </menu>
      <a href="#"><FaHome size={35} className={style.FaHome} onClick={toggleMenu}/></a>
      </section>
    </div>
  )
}
