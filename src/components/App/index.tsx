import { createContext, useEffect, useState } from 'react';
import './styles.css';

//Utilização das rotas
import { RouterProvider } from 'react-router-dom';
import { router } from '../Router';

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
  noResults: boolean;
  setNoResults: (value: boolean) => void;
  loaderActive: boolean;
  setLoaderActive: (value: boolean) => void;
}

export const GithubUserContext = createContext<UserContext>({} as UserContext);

export function App() {
  const [githubUser, setGithubUser] = useState<IUser>({} as IUser);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [loaderActive, setLoaderActive] = useState<boolean>(false);

  return (
    <GithubUserContext.Provider value={{githubUser, setGithubUser, noResults, setNoResults, loaderActive, setLoaderActive}} >
      <div className="App">
        <h1>GitHub Finder</h1>
        <RouterProvider router={router}/>
      </div>
    </GithubUserContext.Provider>
  )
}