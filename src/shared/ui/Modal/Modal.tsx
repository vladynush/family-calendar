import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({visible, onClose, children}) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (visible) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [visible, onClose]);

    if (!visible) return null;

    return ReactDOM.createPortal(
        <div className={styles.overlay}>
            <div className={styles.window}>
                <button className={styles.close} onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
