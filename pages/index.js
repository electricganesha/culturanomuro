import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cultura No Muro</title>
        <meta name="description" content="Cultura no Muro - Home" />
      </Head>
      <main className="main">
        <Image src="/acm.jpg" alt="Logo ACM" width={240} height={240} />
        <h3>
          EM CONSTRU&Ccedil;&Atilde;O
        </h3>
      </main>
    </div>
  )
}
