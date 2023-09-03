import { createRoot } from 'react-dom/client';
import './styles/reset.scss';
import './styles/global.scss';
import { HomePage } from './pages/homePage';

const root = createRoot(document.getElementById('root'))

root.render(<HomePage />)
