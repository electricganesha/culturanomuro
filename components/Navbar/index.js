import styles from './Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__links}>
                <li className={styles.navbar__item}>
                    <Link href="/">
                        In&iacute;cio
                    </Link>
                </li>
                <li className={styles.navbar__item}>
                    <Link href="/eventos">Eventos</Link>
                </li>
                <li className={styles.navbar__item}>
                    <Link href="/galeria">Galeria</Link>
                </li>
                <li className={styles.navbar__item}>
                    <Link href="/blog">Blog</Link>
                </li>
                <li className={styles.navbar__item}>
                    <Link href="/sobre">Sobre N&oacute;s</Link>
                </li>
                <li className={styles.navbar__item}>
                    <Link href="/contacto">Contacto</Link>
                </li>
                <div className={styles.navbar__icons}>
                    <a href="http://www.facebook.com/CulturaNoMuro" target="_blank" rel="noreferrer">
                        <Image src="/facebook.png" width="24" height="24" alt="Facebook Icon" />
                    </a>
                    <a href="http://www.facebook.com/CulturaNoMuro" target="_blank" rel="noreferrer">
                        <Image src="/instagram.png" width="24" height="24" alt="Instagram Icon" />
                    </a>
                </div>
            </ul>
        </nav>
    )
}
