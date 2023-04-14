import { ResultCard } from '../ResultCard';
import { SearchCard } from '../SearchCard';
import './styles.css';

export function Container() {
    return (
        <main className='container'>
            <SearchCard />
            <ResultCard />
        </main>
    )
}