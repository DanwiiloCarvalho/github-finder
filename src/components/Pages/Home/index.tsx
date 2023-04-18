import { useContext } from 'react';
import { ResultCard } from '../../ResultCard';
import { SearchCard } from '../../SearchCard';
import { GithubUserContext, IUser } from '../../App';
import { BiLoaderCircle } from 'react-icons/bi';
import './styles.css';

export function Home() {
    const {githubUser, setGithubUser, noResults, setNoResults, loaderActive, setLoaderActive} = useContext(GithubUserContext);


    return (
        <main className='container'>
            <SearchCard />
            { loaderActive && <div className='box-loader'><BiLoaderCircle color='white' className='loader-icon'/></div>}
            {noResults && <p className='no-results'>Usuário não encontrado!</p>}
            {githubUser.id && <ResultCard />}
        </main>
    )
}