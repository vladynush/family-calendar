import {FC, useState} from "react";
import EventCard from "../../entities/Event/ui/EventCard.tsx";
import {CalendarEvent} from "../../entities/Event/model/types.ts";
import styles from './CalendarPage.module.css'
import Modal from "../../shared/ui/Modal/Modal.tsx";
import EventDetails from "../../entities/Event/ui/EventDetails.tsx";
import Layout from "../../shared/ui/Layout/Layout.tsx";

export const mockEvents: CalendarEvent[] = [
    {
        id: '1',
        title: 'День рождения папы',
        date: '2025-05-12',
        description: 'Не забыть купить торт и подарок 🎁',
    },
    {
        id: '2',
        title: 'Поездка в Питер',
        date: '2025-06-01',
        description: 'Забронировать жильё, купить билеты, собрать вещи',
    },
    {
        id: '3',
        title: 'Родительское собрание',
        date: '2025-04-20',
        description: 'Школа, 7Б класс, в 18:00',
    },
    {
        id: '4',
        title: 'Запись к стоматологу',
        date: '2025-04-25',
        description: 'Клиника "Зубастик", 15:30',
    },
    {
        id: '5',
        title: 'Марафон по бегу',
        date: '2025-07-15',
        description: 'Подготовка к забегу, тренировки 3 раза в неделю',
    },
    {
        id: '6',
        title: 'Встреча с друзьями',
        date: '2025-05-02',
        description: 'Вечером шашлыки у Вани на даче',
    },
];

const CalendarPage: FC = () => {
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