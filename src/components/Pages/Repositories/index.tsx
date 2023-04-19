import { useEffect, useState } from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';
import { RepositoryCard } from '../../RepositoryCard';
import { BiLoaderCircle } from 'react-icons/bi';

export interface Repository {
    name: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}

export function Repositories() {
    const { login } = useParams();
    const [repos, setRepos] = useState<Repository[]>([]);
    /**
     * Campos a serem utilizados:
     * - Nome do repositório
     * - Linguagem de programação
     * - Quantidade de estrelas
     * - Quantidade de forks
     * - Link para o repositório
     */

    useEffect(() => {
        async function fetchRepository() {
            const urlRepository: string = `https://api.github.com/users/${login}/repos`;
            const reposJson: Repository[] = await fetch(urlRepository)
                                                .then(response => response.json());
            const orderedRepos: Repository[] =  reposJson.sort((a, b) => a.stargazers_count >= b.stargazers_count ? -1 : 1);
            
            setRepos(orderedRepos.slice(0, 5));
        }

        fetchRepository().catch(error => console.log(error.message));
    }, []);

    //console.log("Renderizou Repositories");

    return (
        <>
            <h2>Explore os respositórios do usuário: {login}</h2>
            {!(repos.length > 0) && <div className='box-loader'><BiLoaderCircle color='white' className='loader-icon'/></div>}
            {(repos.length > 0) && <main className='container-repositories'>
                <section className='repositories'>
                    {repos && repos.map(repo => <RepositoryCard key={Math.random()}
                                                                name={repo.name}
                                                                language={repo.language}
                                                                stargazers_count={repo.stargazers_count}
                                                                forks_count={repo.forks_count}
                                                                html_url={repo.html_url}/>)}
                </section>
            </main>}
        </>
    )
}