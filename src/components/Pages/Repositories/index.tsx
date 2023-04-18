import { useEffect, useState } from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';

interface Repository {
    name: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    url: string;
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
        <main className='container'>
            <h2>Explore os respositórios do usuário:</h2>
            {repos ? repos.map(repo => repo.name) : null}
        </main>
    )
}