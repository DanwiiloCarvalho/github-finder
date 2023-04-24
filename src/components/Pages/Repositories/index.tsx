import { useEffect, useState } from 'react';
import './styles.css';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
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
    const [repos, setRepos] = useState<Repository[] | null>(null);
    const navigate = useNavigate();
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
            /* const urlRepository: string = `https://api.github.com/users/${login}/repos`;
            const reposJson: Repository[] = await fetch(urlRepository)
                                                .then(response => response.json());
            if(reposJson.length > 0) {                                                
                const orderedRepos: Repository[] =  reposJson.sort((a, b) => a.stargazers_count >= b.stargazers_count ? -1 : 1);
                
                setRepos(orderedRepos.slice(0, 5));
            } else {
                throw new Error("Array de repositórios está vazio");
            } */

            //Refatoração da requisição
            const urlRepository: string = `https://api.github.com/users/${login}/repos`;
            const response = await fetch(urlRepository);
            if (response.status === 404) {
                navigate('usernotfound')
            } else {
                const data: Repository[] = await response.json();
                if (data.length > 0) {
                    const orderedRepos: Repository[] =  data.sort((a, b) => a.stargazers_count >= b.stargazers_count ? -1 : 1);
                    setRepos(orderedRepos.slice(0, 5));
                } else {
                    setRepos(data);
                    throw new Error("Array de repositórios está vazio");
                }
                
            }
        }

        fetchRepository().catch((error) => {
            console.log(error.message);
        });
    }, []);

    return (
        <>
            {!repos && <div className='box-loader'><BiLoaderCircle color='white' className='loader-icon'/></div>}
            
            {repos && <>
            <h2>Explore os respositórios do usuário: {login}</h2>
            <main className='container-repositories'>
                <section className='repositories'>
                    {repos && repos.map(repo => <RepositoryCard key={Math.random()}
                                                                name={repo.name}
                                                                language={repo.language}
                                                                stargazers_count={repo.stargazers_count}
                                                                forks_count={repo.forks_count}
                                                                html_url={repo.html_url}/>)}
                    {(repos.length === 0) && <p className='empty-list'>Lista de repositórios vazia</p>}
                </section>
            </main><Link to={'/github-finder'} className='back'>Voltar</Link></>}
        </>
    )
}