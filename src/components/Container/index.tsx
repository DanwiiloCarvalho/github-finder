import { SearchCard } from '../SearchCard';
import './styles.css';

export function Container() {
    return (
        <main className='container'>
            {/* <h2>Busque por um usuário:</h2> */}
            <SearchCard />
        </main>
    )
}