import type { ReactNode } from "react";
import classes from "./KekModal.module.css";

interface KekModalProps {
  children: ReactNode;               // содержимое модального окна
  visible: boolean;                  // видимость модалки
  setVisible: (value: boolean) => void; // функция для изменения видимости
}

const KekModal: React.FC<KekModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.dialog];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      {children}
    </div>
  );
};

export default KekModal;
