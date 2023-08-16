import Link from 'next/link';
import styles from './TopNavBar.module.css';

export default function TopNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navlink}>
          홈
        </Link>
        <Link href="/" className={styles.navlink}>
          메타 트렌드
        </Link>
        <Link href="/" className={styles.navlink}>
          게임 가이드
        </Link>
        <Link href="/rank" className={styles.navlink}>
          랭킹
        </Link>
        <Link href="/rank" className={styles.navlink}>
          배치툴/사기주사위
        </Link>
      </div>
    </nav>
  );
}
