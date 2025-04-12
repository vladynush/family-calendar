import {FC} from "react";
import Layout from "../../shared/ui/Layout/Layout.tsx";
import EventCard from "../../entities/Event/ui/EventCard.tsx";
import {CalendarEvent} from "../../entities/Event/model/types.ts";

const mockEvents: CalendarEvent[] = [
    {
        id: '1',
        title: 'puk',
        date: '1',
        description: "1"
    },
    {
        id: '2',
        title: 'hruk',
        date: '2',
        description: "2"
    },
    {
        id: '3',
        title: 'top',
        date: '3',
        description: "3"
    }
]

const CalendarPage: FC = ({}) => {
    return (
        <Layout title={'Главная'}>
            <h2>Семейный календарь событий</h2>
            {mockEvents.map((event) =>
                <EventCard key={event.id} event={event}/>
            )}
        </Layout>
    )
}


export default CalendarPage;