import { useContext, useState } from 'react';
import { IUser } from '../App';
import { GithubUserContext } from '../App';
import './styles.css';
import { GoSearch } from 'react-icons/go';

export function InputSearch() {
    const [userName, setUserName] = useState<string>();
    const {githubUser, setGithubUser, noResults, setNoResults, loaderActive, setLoaderActive} = useContext(GithubUserContext);
    
    const urlAPI: string = 'https://api.github.com/users/';

    async function fetchGithubUser(login: string) {
        setLoaderActive(true);
        setNoResults(false);
        setGithubUser({} as IUser);
        const userJson: IUser = await fetch(urlAPI + login)
                              .then(response => response.json()) as IUser;
        if (userJson.id) {
            setGithubUser(userJson);
        } else {
            setNoResults(true);
        }
        setLoaderActive(false);
    }

    return (
        <div className='input-search'>
            <input type="text" placeholder='Digite o nome do usuário' onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={() => fetchGithubUser(userName as string).catch(error => console.log(error.message))}><GoSearch /></button>
        </div>
    )
}