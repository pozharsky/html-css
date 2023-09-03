import cn from 'classnames';
import styles from './styles.scss';

import { Note } from '../note';

export function NotesWidget({ className }) {
  return (
    <div className={cn(styles.NotesWidget, className)}>
      <Note title="Личное" />
      <Note title="Рабочее" />
    </div>
  )
}
