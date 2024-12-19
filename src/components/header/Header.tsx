import { useEffect, useState } from 'react';
import styles from './Header.module.scss'
import { NavLink } from "react-router";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])
  return (
    <div>
      <header className={styles.header}>
          {width > 800 ? (
          <>
            <img src="../src/assets/logo/logo_text_4x.png" alt="" width="218px" height="56px" />
            <nav>
            <ul>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? "active_link" : ""
                  }
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
                      className={({ isActive }) =>
                        isActive ? "active_link" : ""
                      }
                    >
                      Малый груз
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to='/service2'
                      className={({ isActive }) =>
                        isActive ? "active_link" : ""
                      }
                    >
                      Большой груз
                  </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink 
                  to='/info'
                  className={({ isActive }) =>
                    isActive ? "active_link" : ""
                  }
                >
                  О КОМПАНИИ
                </NavLink>
              </li>
              <li>
                <a 
                  href='#footer'
                >
                  КОНТАКТЫ
                </a>
              </li>
            </ul>
          </nav>
          </>
          ) : (
            <div className={styles.mobile_menu}>
              <img src="../src/assets/logo/logo_text_4x.png" alt="" width="200px" height="54px" />
              <button>
                <img src="../src/assets/icons/MobileMenu.svg" alt="" />
              </button>
            </div>
          )
        }
      </header>
    </div>
  )
}
