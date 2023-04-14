import { FollowCard } from '../FollowCard';
import './styles.css';
import { MdLocationOn } from 'react-icons/md';

export function ResultCard() {
    return (
        <section className='result'>
            <div className="container">
                <img className='avatar' src="https://avatars.githubusercontent.com/u/54482254?v=4" alt="avatar" />
                <p className='name'>DanwiiloCarvalho</p>
                <span><MdLocationOn className='location'/> São Luís, Brasil</span>
                <FollowCard />
                <a href="">Ver melhores projetos</a>
            </div>
        </section>
    )
}