import {FC, useState} from "react";
import EventCard from "../../entities/Event/ui/EventCard.tsx";
import {CalendarEvent} from "../../entities/Event/model/types.ts";
import styles from './CalendarPage.module.css'
import Modal from "../../shared/ui/Modal/Modal.tsx";
import EventDetails from "../../entities/Event/ui/EventDetails.tsx";
import Layout from "../../shared/ui/Layout/Layout.tsx";

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
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    return (
        <Layout title={'Главная'}>
            <div className={styles.page}>
                <h2 className={styles.heading}>События</h2>

                <div className={styles.list}>
                    {mockEvents.map((event) => (
                        <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)}/>
                    ))}
                </div>

                <Modal visible={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
                    {selectedEvent && <EventDetails {...selectedEvent} />}
                </Modal>
            </div>
        </Layout>
    );
};

export default CalendarPage;