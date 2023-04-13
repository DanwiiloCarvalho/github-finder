import './styles.css';
import { GoSearch } from 'react-icons/go';

export function InputSearch() {
    return (
        <div className='input-search'>
            <input type="text" placeholder='Digite o nome do usuário'/>
            <button><GoSearch /></button>
        </div>
    )
}