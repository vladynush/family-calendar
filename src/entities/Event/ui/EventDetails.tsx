import {CalendarEvent} from "../model/types.ts";
import {FC} from "react";
import styles from "./EventDetails.module.css";

type Props = CalendarEvent;

const EventDetails: FC<Props> = props => {
    return (
        <div className={styles.details}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.date}>{props.date}</div>
            {props.description && <div className={styles.description}>{props.description}</div>}
        </div>
    )
}

export default EventDetails;