import { useContext, useState } from 'react';
import { GithubUserContext, IUser } from '../App';
import { FollowCard } from '../FollowCard';
import './styles.css';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

export function ResultCard() {

    const {githubUser, setGithubUser} = useContext(GithubUserContext);
    
    return ( 
        <section className='result'>
            <div className="container">
                <img className='avatar' src={githubUser.avatar_url} alt="avatar" />
                <p className='name'>{githubUser.login}</p>
                {githubUser.location && <span><MdLocationOn className='location'/> {githubUser.location}</span>}
                <FollowCard />
                <Link to={`/repos/${githubUser.login}`}>Ver melhores projetos</Link>
            </div>
        </section>
    )
}