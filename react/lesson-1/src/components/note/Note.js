import cn from 'classnames';
import styles from './styles.scss';

export function Note({ className, title }) {
  return (
    <div className={cn(styles.Note, className)}>
      <p>{title}</p>
      <textarea className={styles.Note_textarea} />
    </div>
  )
}
