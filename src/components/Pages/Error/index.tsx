import { Link } from 'react-router-dom';
import './styles.css';

export function Error() {
    return (
        <main className='container container-errorpage'>
            <h2>Oops! 404</h2>
            <p>Página não encontrada</p>
            <Link to={'/'} className='back'>Voltar</Link>
        </main>
    )
}