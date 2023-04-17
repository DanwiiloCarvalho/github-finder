import { useContext, useRef, useState } from 'react';
import { IUser } from '../App';
import { GithubUserContext } from '../App';
import './styles.css';
import { GoSearch } from 'react-icons/go';


export function InputSearch() {
    const userNameRef = useRef<HTMLInputElement>(null);

    const {githubUser, setGithubUser, noResults, setNoResults, loaderActive, setLoaderActive} = useContext(GithubUserContext);
    
    const urlAPI: string = 'https://api.github.com/users/';

    async function fetchGithubUser() {
        setLoaderActive(true);
        setNoResults(false);
        setGithubUser({} as IUser);
        const userJson: IUser = await fetch(urlAPI + userNameRef.current?.value )
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
            <input type="text" placeholder='Digite o nome do usuário' ref={userNameRef} 
            onKeyDown={e => e.key == 'Enter' ? fetchGithubUser().catch(error => console.log(error.message)) : null} />
            <button onClick={() => fetchGithubUser().catch(error => console.log(error.message))}><GoSearch /></button>
        </div>
    )
}