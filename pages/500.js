import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Custom500() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cultura No Muro</title>
                <meta name="description" content="Cultura no Muro" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Image src="/acm.jpg" alt="Logo ACM" width={240} height={240} />
                <h3>
                    Pedimos desculpa, ocorreu um erro. Por favor tente mais tarde.
                </h3>
            </main>

            <footer className={styles.footer}>
                <p>Todos os direitos reservados © Cultura no Muro</p>
            </footer>
        </div>
    )
}
