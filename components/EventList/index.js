import styles from './EventList.module.scss';
import Event from '/components/Event';

export default function EventList({ events, title }) {
    return <div className={styles.list}>
        <h1>{title}</h1>
        {events.map(event => <div key={event.id} className={styles.list__item}>
            <Event event={event} />
        </div>)}
    </div>
}
