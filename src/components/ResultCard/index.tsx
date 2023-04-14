import { useContext } from 'react';
import { GithubUserContext, IUser } from '../App';
import { FollowCard } from '../FollowCard';
import './styles.css';
import { MdLocationOn } from 'react-icons/md';

export function ResultCard() {

    const {githubUser, setGithubUser} = useContext(GithubUserContext);

    return (
        <section className='result'>
            <div className="container">
                <img className='avatar' src={githubUser.avatar_url} alt="avatar" />
                <p className='name'>{githubUser.login}</p>
                <span><MdLocationOn className='location'/> {githubUser.location}</span>
                <FollowCard />
                <a href="">Ver melhores projetos</a>
            </div>
        </section>
    )
}