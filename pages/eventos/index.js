import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import EventList from '/components/EventList';

export default function Events({ nextEvents, previousEvents }) {
    return (
        <div className="container">
            <Head>
                <title>Cultura No Muro - Eventos</title>
                <meta name="description" content="Cultura no Muro - Eventos" />
            </Head>
            <main className="main">
                <Image src="/acm.jpg" alt="Logo ACM" width={120} height={120} />
                {nextEvents.length > 0
                    ? <EventList events={nextEvents} title="Pr&oacute;ximos Eventos:" />

                    : null}
                {previousEvents.length > 0
                    ? <EventList events={previousEvents} title="Eventos Anteriores:" />
                    : null
                }
            </main>
        </div>
    )
}

Events.getInitialProps = async (ctx) => {
    const res = await fetch('https://culturanomuro.vercel.app/api/events')
    const json = await res.json();

    const nextEvents = json.filter(evento => new Date(evento.start_time) > Date.now());
    const previousEvents = json.filter(evento => new Date(evento.start_time) < Date.now());

    return {
        nextEvents,
        previousEvents
    }
}
