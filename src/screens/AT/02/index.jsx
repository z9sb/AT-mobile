import style from './AT_02.module.css'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";

export default function AT_02() {

  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = (() => {
    setMenuOpen(!menuOpen);
  });

  return (
    <div className={style.container}>
      <section className={`${style.menu} ${menuOpen ? style.menuOpen : ''} `}>
      <section className={style.containerHeader}>
        <img src="https://lms.infnet.edu.br/moodle/pluginfile.php/1/theme_remui/logomini/1722631119/infnet.png" alt="Logo" className={style.logo}/>
        <a href="#"><FaHome size={35} className={style.FaHome} onClick={toggleMenu}/></a>
      </section>
        <menu className={`${style.menuTag} ${menuOpen ? style.menuOpen : style.menuHide }`}>
          <nav>
            <ul className={style.menuOptions}>
              <li><a href="">Perfil</a></li>
              <li><a href="">Postagens</a></li>
              <li><a href="">Fotos</a></li>
              <li><a href="">Amigos</a></li>
              <li><a href="">publicações</a></li>
              <li><a href="">Conversas</a></li>
              <li><a href="">Curtidas</a></li>
              <li><a href="">Notificações</a></li>
              <li><a href="">Configuração</a></li>
            </ul>
          </nav>
        </menu>
      </section>
      
    </div>
  )
}
