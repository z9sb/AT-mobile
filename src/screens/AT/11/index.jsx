import { useState } from "react";
import style from "./AT_11.module.css";

export default function AT_11() {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = () => {
    return (
      <div>
        <ul>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
        </ul>
      </div>
    );
  };
  return (
    <div className={style.container}>
      <header id={style.header}>
        <p>Header</p>
      </header>
      <div id={style.globalMenu}>
        <button
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          :::
        </button>
        <span>{openMenu? menu(): 'Global Menu'}</span>
      </div>
      <div id={style.Ads}>
        <p>Ads</p>
      </div>
      <div id={style.contextMenu}>
        <p>Context Menu</p>
      </div>
      <div id={style.mainContent}>
        <p>Main Content</p>
      </div>
      <footer id={style.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}
