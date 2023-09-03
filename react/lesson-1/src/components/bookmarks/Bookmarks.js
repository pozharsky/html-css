import cn from 'classnames';
import styles from './styles.scss';

export function Bookmarks({ data }) {
  return (
    <div className={styles.Bookmarks}>
      <div className={styles.Bookmarks_header}>
        {data.title}
      </div>

      <div className={styles.Bookmarks_body}>
        <ul className={styles.Bookmarks_list}>
          {data.items.map((item, idx) => (
            <li className={styles.Bookmarks_item} key={idx}>
              <a className={styles.Bookmarks_link} href={item.link} target="_blank">
                {idx + 1}. {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
