import {CalendarEvent} from "../model/types.ts";
import styles from './EventCard.module.css'
import {FC} from "react";


type Props = {
    event: CalendarEvent;
    onClick?: () => void;
}

export const EventCard: FC<Props> = ({event, onClick}) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.title}>{event.title}</div>
            <div className={styles.date}>{event.date}</div>
            {event.description && <div className={styles.description}>{event.description}</div>}
        </div>
    );
};

export default EventCard;