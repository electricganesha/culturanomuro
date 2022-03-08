import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Custom404() {
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
                    Pedimos desculpa, mas a p&aacute;gina que pretendia visitar n&atilde;o existe.
                </h3>
            </main>

            <footer className={styles.footer}>
                <p>Todos os direitos reservados © Cultura no Muro</p>
            </footer>
        </div>
    )
}