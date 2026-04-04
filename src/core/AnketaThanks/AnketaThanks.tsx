import { FC } from 'react';
import * as styles from './AnketaThanks.css';

export const AnketaThanks: FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.heading}>Спасибо за ответы!</h1>
      <p className={styles.description}>
        <span className={styles.nameAccent}>Имя</span>, мы свяжемся с вами в
        течение 24 часов, чтобы мы смогли ответить на все оставшиеся вопросы
        ваши к нам и наши к вам.
      </p>
    </div>
  );
};
