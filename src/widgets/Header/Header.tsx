import {FC} from 'react';
import styles from "./Header.module.css";

type Props = {
    title: string,
}

export const Header: FC<Props> = (props) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{props.title}</h1>
        </header>
    )
}