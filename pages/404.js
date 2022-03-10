import Head from 'next/head'
import Image from 'next/image'

export default function Custom404() {
    return (
        <div className="container">
            <Head>
                <title>Cultura No Muro - Erro</title>
                <meta name="description" content="Cultura no Muro - Erro" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <Image src="/acm.jpg" alt="Logo ACM" width={240} height={240} />
                <h3>
                    Pedimos desculpa, mas a p&aacute;gina que pretendia visitar n&atilde;o existe.
                </h3>
            </main>
        </div>
    )
}
