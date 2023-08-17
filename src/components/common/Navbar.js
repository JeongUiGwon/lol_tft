import { useLocation, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { href: "/", name: "홈" },
    { href: "/meta-trends", name: "메타 트렌드" },
    { href: "/game-guide", name: "게임 가이드" },
    { href: "/ranking", name: "랭킹" },
    { href: "/tools", name: "배치툴/사기주사위" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href;

          return (
            <Link
              className={isActive ? styles.navlinkActive : styles.navlink}
              to={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
