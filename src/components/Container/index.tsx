import { useContext, useState } from 'react';
import { ResultCard } from '../ResultCard';
import { SearchCard } from '../SearchCard';
import { GithubUserContext, IUser } from '../App'
import './styles.css';

export function Container() {
    const {githubUser, setGithubUser, showResult, setShowResult} = useContext(GithubUserContext);

    return (
        <main className='container'>
            <SearchCard />
            {/* <ResultCard /> */}
            {showResult && <ResultCard />}
        </main>
    )
}