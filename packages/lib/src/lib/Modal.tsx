import { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  show: boolean;
}

export default function Modal({ show, children, ...props }: ModalProps) {
  if (show) {
    return (
      <div className={styles.modal}>
        <div className={styles.modal_content} {...props}>
          {children}
        </div>
      </div>
    );
  }

  return null;
}
