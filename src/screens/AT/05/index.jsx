import style from './AT_05.module.css'

export default function AT_05() {
  return (
    <div className={style.container}>
      <header id={style.header}><p>Header</p></header>
      <div id={style.globalMenu}><button>:::</button><span>Global Menu</span></div>
      <div id={style.Ads}><p>Ads</p></div>
      <div id={style.contextMenu}><p>Context Menu</p></div>
      <div id={style.mainContent}><p>Main Content</p></div>
      <footer id={style.footer}><p>Footer</p></footer>
    </div>
  )
}
