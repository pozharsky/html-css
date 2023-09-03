import cn from 'classnames';
import styles from './styles.scss';

import { Bookmarks } from '../bookmarks';
import { bookmarks } from '../../config/data/bookmarks';

export function BookmarksWidget({ className }) {
  const data = Object.values(bookmarks);

  return (
    <div className={cn(styles.BookmarksWidget, className)}>
      {data.map((category, idx) => (
        <Bookmarks data={category} key={idx} />
      ))}
    </div>
  )
}
