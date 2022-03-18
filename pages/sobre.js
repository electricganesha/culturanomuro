
import Head from 'next/head';
import Image from 'next/image';

export default function Sobre() {
    return (
        <div className="container">
            <Head>
                <title>Cultura No Muro</title>
                <meta name="description" content="Cultura no Muro - Home" />
            </Head>
            <main className="main" style={{ textAlign: 'justify' }}>
                <Image src="/acm.jpg" alt="Logo ACM" width={120} height={120} />
                <p style={{ marginTop: 48 }}>
                    A Associação Cultura no Muro surge da vontade de dinamizar a oferta cultural e fomentar a consciência social na área da Parede e arredores. O projecto começou nas reuniões de um grupo de amigos motivados pelos eventos da ocupação da praça do Rossio em 2011, partilhando dessa urgência de criar fóruns alternativos de consciencialização cívica e outros canais de expressão individual e cultural – e de resistir ao empobrecimento das nossas vidas despoletado pelas políticas actualmente vigentes.
                </p>
                <p>
                    Juntos com a Sociedade Musical União Paredense - SMUP (onde estamos sediados), investimos quer no reconhecimento e apoio da actividade artística e cultural local, quer na criação de novos eventos e recursos na nossa área. Procuramos tanto trazer as nossas ideias e iniciativas à área, com a programação cultural própria da associação, como assistir quem tenha os seus próprios projectos a trazê-los à fruição, seja na organização de eventos, na divulgação dos mesmos, na partilha de informação, ou outras vertentes em que possamos ser úteis à comunidade, sendo-nos essencial um espírito colaborativo de abertura às necessidades e desejos dos que nos rodeiam. Assim sendo, damos as boas-vindas às propostas que nos queiram fazer, que podem ser realizadas através dos nossos contactos. Cremos acima de tudo que estes espaços não podem nem devem ser reduzidos a subúrbios silenciosos das áreas de Lisboa e Cascais, áreas maiores às quais vemos circunscrita a actividade cultural e cívica. Antes, acreditamos na possibilidade de descentralizar e redistribuir a riqueza cultural, multiplicando os focos de oferta cultural e procurando trazer actividades e possibilidades a espaços normalmente ausentes da agenda cultural.
                </p>
                <p>
                    No processo, desejamos activar o potencial da área em termos da criação artística e cultural e em termos do pensamento crítico de questões que temos como urgentes hoje em dia, como a actual crise económica, a sustentabilidade económica e ecológica, a luta contra a discriminação de diversas identidades sociais e a viabilidade de uma vida cívica e cultural suburbana – sendo que não separamos a discussão e construção de valores do trabalho de produção e partilha artística e cultural.E em tudo isto, necessariamente contamos convosco, estando abertos ao que a nossa área e a nossa comunidade queiram e precisem de construir.
                </p>
            </main>
        </div>
    )
}







