import Head from 'next/head'
import Image from 'next/image'

export default function Custom500() {
    return (
        <div className="container">
            <Head>
                <title>Cultura No Muro - Erro</title>
                <meta name="description" content="Cultura no Muro Error" />
            </Head>

            <main className="main">
                <Image src="/acm.jpg" alt="Logo ACM" width={240} height={240} />
                <h3>
                    Pedimos desculpa, ocorreu um erro. Por favor tente mais tarde.
                </h3>
            </main>
        </div>
    )
}
