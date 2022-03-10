import Head from 'next/head';
import Image from 'next/image';

export default function Evento({ eventos }) {
    const evento = eventos[0];

    return (
        <div className="container">
            <Head>
                <title>Cultura No Muro - Eventos</title>
                <meta name="description" content="Cultura no Muro - Eventos" />
            </Head>
            <main className="main">
                <Image src="/acm.jpg" alt="Logo ACM" width={120} height={120} />
                <h1 style={{
                    maxWidth: 640,
                    textAlign: 'center'
                }}>{evento.name}</h1>
                <p style={{
                    maxWidth: 640,
                    whiteSpace: 'pre-line',
                    textAlign: 'left'
                }} dangerouslySetInnerHTML={{ __html: evento.description }} />
            </main>
        </div>
    )
}

Evento.getInitialProps = async (ctx) => {
    const queryId = ctx.query.id;
    const res = await fetch(`https://culturanomuro.vercel.app/api/events/${queryId}`)
    const json = await res.json()

    return { eventos: json }
}
