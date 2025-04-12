import {FC, ReactNode} from "react";
import {Header} from "../../../widgets/Header/Header.tsx";
import styles from "./Layout.module.css"


type Props = {
    children: ReactNode,
    title?: string,
}

const Layout: FC<Props> = ({ children, title = 'Ты забыл заголовок' }) => {
    return (
        <div className={styles.layout}>
            <Header title={title} />
            <main className={styles.main}>{children}</main>
        </div>
    );
};


export default Layout;