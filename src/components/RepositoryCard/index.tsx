import { Repository } from '../Pages/Repositories';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { RiBookMarkFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './styles.css';

export function RepositoryCard(repo: Repository) {
    
    return ( 
        <section className='repository-card'>
            <h3>{repo.name}</h3>
            <p>&lt;/&gt; {repo.language}</p>
            <div className="stars-forks">
                <div className="stars">
                    <span className='icon'><AiOutlineStar/></span>
                    <span className='number'>{repo.stargazers_count}</span>
                </div>
                <div className="forks">
                    <span className='icon'><AiOutlineFork/></span>
                    <span className='number'>{repo.forks_count}</span>
                </div>
            </div>
            <Link to={repo.html_url}>Ver código<RiBookMarkFill className='bookmark'/></Link>
        </section>
    )
}