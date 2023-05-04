import styles from "components/Header/Nav.module.scss"
import cart from "assets/icons/icon-cart.svg"
import logo from "assets/icons/icon-logo.svg"
import moon from "assets/icons/icon-moon.svg"
import sun from "assets/icons/icon-sun.svg"
import search from "assets/icons/icon-search.svg"
import burger from "assets/icons/icon-toggle.svg"

const navItems = ["男款", "女款", "最新消息", "客製商品", "聯絡我們"] 

function NavItem({item}) {
  return(
    <li className={styles.navItem}>
      <a className={styles.navLink} href="#">
        {item}
      </a>
    </li>
  )
}

export default function Nav() {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.headerContainer} mx-auto`}>
        {/* navbar-toggle */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <img className={styles.burger}src={burger} alt="burger" />
        </label>
        {/* navbar-menu */}
        <nav className={styles.navbarMenu}>
          {/* navItems */}
          <ul className={`${styles.navList} ${styles.siteMenuList}`}>
            {navItems.map((item, index) =>
              <NavItem item={item} key={index} />
            )}
          </ul>
          {/* logo */}
          <a className={styles.headerLogoContainer} href="#">
            <img className={styles.logoIcon}src={logo} alt="logo" />
          </a>
          <ul className={`${styles.navList} ${styles.siteActionList}`}>
            {/* search */}
            <li className={styles.navItem}>
              <img className={styles.navIcon}src={search} alt="search" />
            </li>
            {/* cart */}
            <li className={styles.navItem}>
              <img className={styles.navIcon}src={cart} alt="cart" />
            </li>
            <li id="theme-toggle" className={styles.navItem}>
              {/* moon */}
              <img className={`${styles.navIcon} ${styles.navIconMoon}`}src={moon} alt="moon" />
              {/* sun */}
              <img className={`${styles.navIcon} ${styles.navIconSun}`}src={sun} alt="sun" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}