import { Header } from '../../components/header';
import styles from './styles.scss';
import { BookmarksWidget } from '../../components/bookmarksWidget';
import { NotesWidget } from '../../components/notesWidget';
import imagePath from '../../assets/images/image.jpg';

export function HomePage() {
  return (
    <div className={styles.HomePage}>
      <Header className={styles.HomePage_header} />
      <NotesWidget />
      <img src={imagePath} alt=""/>
      <BookmarksWidget className={styles.HomePage_bookmarksWidget} />
    </div>
  )
}
