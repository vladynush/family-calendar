import {FC} from "react";
import {CalendarEvent} from "../model/types.ts";


type Props = {
    event: CalendarEvent;
}

const EventCard: FC<Props> = props => {
    return (
        <div>
            <div>
                {props.event.title}
            </div>
            <div>
                {props.event.date}
            </div>
            <div>
                {props.event.description}
            </div>
        </div>
    )
}

export default EventCard;