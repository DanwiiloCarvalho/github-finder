import { createContext, useEffect, useState } from 'react';
import { Container } from '../Container';
import './styles.css';

export interface IUser {
  id: number,
  login: string,
  avatar_url: string,
  location: string,
  followers: number,
  following: number
}

export interface UserContext {
  githubUser: IUser;
  setGithubUser: (value: IUser) => void;
  showResult: boolean;
  setShowResult: (value: boolean) => void;
}

export const GithubUserContext = createContext<UserContext>({} as UserContext);
/* export const GithubUserContext = createContext<UserContext | null>(null); */

export function App() {
  const [githubUser, setGithubUser] = useState<IUser>({} as IUser);
  const [showResult, setShowResult] = useState<boolean>(false);

  /* useEffect(() => {
    async function getGithubUser() {
      const userJson = await fetch("https://api.github.com/users/DanwiiloCarvalho")
                              .then(response => response.json());
      setGithubUser(userJson);
    }

    getGithubUser();
  }, []); */

  return (
    <GithubUserContext.Provider value={{githubUser, setGithubUser, showResult, setShowResult}} >
      <div className="App">
        <h1>GitHub Finder</h1>
        <Container />
      </div>
    </GithubUserContext.Provider>
  )
}