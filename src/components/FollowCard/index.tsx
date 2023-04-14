import { useContext } from 'react';
import './styles.css';
import { GithubUserContext } from '../App';

export function FollowCard() {

    const {githubUser, setGithubUser} = useContext(GithubUserContext);

    return (
        <div className='follow'>
            <div className="followers">
                <h3>Seguidores:</h3>
                <div className="amount">{githubUser.followers}</div>
            </div>
            <div className="vertical-line"></div>
            <div className="following">
                <h3>Seguindo:</h3>
                <div className="amount">{githubUser.following}</div>
            </div>
        </div>
    )
}