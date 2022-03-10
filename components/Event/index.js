import styles from './Event.module.scss';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import Link from 'next/link';
import React from 'react';

export default function Event({ event }) {
    return (
        <div className={styles.event} key={event.id}>
            <Link href={`/eventos/${event.id}`}>
                <a>
                    {format(new Date(event.start_time), "EEEE, d 'de' MMMM", { locale: pt })} :&nbsp;
                    {event.name}
                </a>
            </Link>
        </div>
    )
}
