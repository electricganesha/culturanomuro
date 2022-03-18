
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        }

        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router.events]);

    const menu = <ul className={styles.links}>
        <li className={styles.item}>
            <Link href="/">
                In&iacute;cio
            </Link>
        </li>
        <li className={styles.item}>
            <Link href="/eventos">Eventos</Link>
        </li>
        <li className={styles.item}>
            <Link href="/galeria">Galeria</Link>
        </li>
        <li className={styles.item}>
            <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.item}>
            <Link href="/sobre">Sobre N&oacute;s</Link>
        </li>
        <li className={styles.item}>
            <Link href="/contacto">Contacto</Link>
        </li>
        <div className={styles.icons}>
            <a href="http://www.facebook.com/CulturaNoMuro" target="_blank" rel="noreferrer">
                <Image src="/facebook.png" width="24" height="24" alt="Facebook Icon" />
            </a>
            <a href="http://www.facebook.com/CulturaNoMuro" target="_blank" rel="noreferrer">
                <Image src="/instagram.png" width="24" height="24" alt="Instagram Icon" />
            </a>
        </div>
    </ul>

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__burger}>
                {isMenuOpen
                    ? <Burger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
                    : <Burger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(true)} />
                }

                <CSSTransition in={isMenuOpen} timeout={500} classNames="slide" unmountOnExit>
                    {menu}
                </CSSTransition>
            </div>
            <div className={styles.navbar__menu}>
                {menu}
            </div>
        </nav>
    )
}
