import { useState } from 'react';
import cn from 'classnames';
import styles from './styles.scss';
import { useEffect } from 'react';

export function Header({ className }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date(time - 1000));
    }, 1000)
  });

  return (
    <div className={cn(styles.Header, className)}>
      <p className={styles.Header_time}>{time.toLocaleTimeString()}</p>
      <p className={styles.Header_greetings}>Добро пожаловать!</p>
    </div>
  )
}
