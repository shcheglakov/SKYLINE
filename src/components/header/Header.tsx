import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { NavLink } from "react-router";
import logo_text_4x from "/src/assets/logo/logo_text_4x.png"
import MobileMenu from "/src/assets/icons/MobileMenu.svg"
import CloseMenu from "/src/assets/icons/CloseMenu.svg"

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  return (
    <div>
      <header className={styles.header}>
        {width > 800 ? (
          <>
            <img src={logo_text_4x} alt="" width="218px" height="56px" />
            <nav>
              <ul>
                <li>
                  <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? "active_link" : "")}
                  >
                    ГЛАВНАЯ
                  </NavLink>
                </li>
                <li className={styles.dropdown}>
                  <p> 
                    УСЛУГИ
                  </p>
                  <ul>
                    <li>
                      <NavLink 
                        to='/service1'
                        className={({ isActive }) => (isActive ? "active_link" : "")}
                      >
                        Малый груз
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to='/service2'
                        className={({ isActive }) => (isActive ? "active_link" : "")}
                      >
                        Крупногабарит
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink 
                    to='/info'
                    className={({ isActive }) => (isActive ? "active_link" : "")}
                  >
                    О КОМПАНИИ
                  </NavLink>
                </li>
                <li>
                  <a href='#footer'>
                    КОНТАКТЫ
                  </a>
                </li>
              </ul>
            </nav>
          </>
        ) : (
              <div className={styles.mobile_menu}>
                <div className={styles.mobile_logo}>
                  <img src={logo_text_4x} alt="" width="200px" height="54px" />
                </div>
                <button onClick={() => setMenuOpen(true)}>
                  <img src={MobileMenu} alt="" />
                </button>
              </div>
        )}
      </header>
      {menuOpen && width <= 800 && (
        <div className={styles.mobile_menu_full}>
          <div className={styles.mobile_menu_full_content}>
            <button className={styles.mobile_menu_full_close} onClick={() => setMenuOpen(false)}>
               <img src={CloseMenu} alt="" width="32px" />
            </button>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to='/'
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => (isActive ? "active_link" : "")}
                  >
                    ГЛАВНАЯ
                  </NavLink>
                </li>
                <li className={styles.dropdown}>
                  <p> 
                    УСЛУГИ
                  </p>
                  <ul>
                    <li>
                      <NavLink 
                        to='/service1'
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => (isActive ? "active_link" : "")}
                      >
                        Малый груз
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to='/service2'
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => (isActive ? "active_link" : "")}
                      >
                        Крупногабарит
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink 
                    to='/info'
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => (isActive ? "active_link" : "")}
                  >
                    О КОМПАНИИ
                  </NavLink>
                </li>
                <li>
                  <a href='#footer'  onClick={() => setMenuOpen(false)}>
                    КОНТАКТЫ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
